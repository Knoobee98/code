//import sequelize
const { sequelize } = require('./../models')
const { Op } = require('sequelize')

//to generate uuid
const { v4: uuidv4 } = require('uuid')

//import model
const db = require('./../models/index')
const users = db.users

//import hash
const { hashPassword, hashMatch } = require('./../lib/hashPassword')

//import jwttoken
const { generateToken, verifyToken } = require('./../lib/token')

module.exports = {
    register: async(req, res) => {
        const t = await sequelize.transaction();

        try {
            // step 1: ambil data dari req.body
            const { username, email, password, role } = req.body;
            //step 2: validasi data
            if(!username.length || !email.length || !password.length || !role.length)
            return res.status(404).send({
                isError: true,
                message: 'username, email, password, role is required',
                data: null
            })

            //email validation
            let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            if(!regexEmail.test(email)){
                return res.status(404).send({
                    isError: true,
                    message: 'email must be valid',
                    data: null
                })
            }

            //password character length validation
            if(password.length < 6 || password.length > 10){
                return res.status(404).send({
                    isError: true,
                    message: 'password must be 6-10 characters',
                    data: null
                })
            }
            
            //password character set validation
            let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
            if(!regex.test(password)){
                return res.status(404).send({
                    isError: true,
                    message: 'password must contain number and alphabet',
                    data: null
                })
            }

            //step 3: check ke database apakah email sudah ada atau belum
            let checkUsername = await users.findOne({
                where: {
                    [Op.and] : [
                        {username: username},
                        {email: email}
                    ]
                }
            }, {transaction: t})
            if(checkUsername)
            return res.status(404).send({
                isError: true,
                message: 'username or email already exist',
                data: null
            })
            //step 4: simpan data ke database
            let newUser = await users.create({
                id: uuidv4(), username, email, password: await hashPassword(password), role
            }, {transaction: t})
            //step 5: kirim response ke client
            await t.commit();
            res.status(201).send({
                isError: false,
                message: 'register successfull',
                data: newUser
            })
        } catch (error){
            res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
        
    },

    login: async(req, res) => {
        try {
            const { usernameOrEmail, password } = req.query;

            if(!username.length || !password.length){
                return res.status(404).send({
                    isError: true,
                    message: 'username/email and password is required',
                    data: null
                })
            }

            let findUsers = await users.findOne({
                where: { 
                    [Op.or]: [
                    {
                        email: usernameOrEmail
                    },
                    {
                        username: usernameOrEmail
                    }
                ]
                }
            })
            
            let matchPassword = await hashMatch(password, findUsers.password)

            if(!matchPassword) return res.status(404).send({
                isError: true,
                message: 'username or password is wrong',
                data: null
            })

            //generate token
            const token = generateToken({id: findUsers.id})

            res.status(201).send({
                isError: false,
                message: 'login successfull',
                data: {token}
            })

            
        } catch (error) {
            res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            })
            
        }
    }
}