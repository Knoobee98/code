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
            const { username, email, password } = req.body;
            //step 2: validasi data
            if(!username.length || !email.length || !password.length)
            return res.status(404).send({
                isError: true,
                message: 'username, email, password is required',
                data: null
            })
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
                id: uuidv4(), username, email, password
            }, {transaction: t})
            //step 5: kirim response ke client
            await t.commit();
            res.status(201).send({
                isError: false,
                message: 'register successfull',
                data: null
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
            const { username, password } = req.body;

            if(!username.length || !password.length){
                return res.status(404).send({
                    isError: true,
                    message: 'username and password is required',
                    data: null
                })
            }

            let checkUsername = await users.findOne({
                where: {
                    username
                }
            })

            if(!checkUsername) return res.status(404).send({
                isError: true,
                message: 'username or password is wrong',
                data: null
            })
            
            let matchPassword = await matchPassword(password, checkUsername.dataValues.password)

            if(!matchPassword) return res.status(404).send({
                isError: true,
                message: 'username or password is wrong',
                data: null
            })

            //generate token
            const token = createToken({id: checkUsername.dataValues.id})

            res.status(201).send({
                isError: false,
                message: 'login successfull',
                data: {token, username: checkUsername.dataValues.username}
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