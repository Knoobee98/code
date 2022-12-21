//import sequelize
const { sequelize } = require('./../models')
const { Op } = require('sequelize')

//to generate uuid
const { v4: uuidv4 } = require('uuid')

//import model
const db = require('./../models/index')
const users = db.users
const users_address = db.users_address

module.exports = {
    getUser: async(req, res) => {
        try {
            let find = await users.findAll()
            res.status(200).send({
                isError: false,
                message: 'get user success',
                data: find
            })
        } catch (error) {
            res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    loginUser: async(req, res) => {
        try {

            const { username, password } = req.body

            //validasi
            if(!username.length || !password.length){
                res.status(404).send({
                    isError: true,
                    message: 'email & password is required',
                    data: null
                })
            }

            //cek database apakah exist
            let checkUser = await users.findOne({
                where: {
                    [Op.and]: [
                        {username: username},
                        {password: password}
                    ]
                }
            })
            console.log(checkUser.dataValues.id)
            if(!checkUser){
                res.status(404).send({
                    isError: true,
                    message: 'username & password is wrong',
                    data: null
                })
            }

            res.status(200).send({
                isError: false,
                message: 'login success',
                data: {id: checkUser.dataValues.id, username: checkUser.dataValues.username}
            })

        } catch (error) {
            res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    registerUser: async(req, res) => {
        const t = await sequelize.transaction()
        try {
            // step 1: ambil data dari req.body
            const { username, email, password } = req.body
            // step 2: validasi
            if(!username.length || !email.length || !password.length)
                return res.status(404).send({
                    isError: true,
                    message: 'username, email, password is required',
                    data: null
                })
            
            // step 3: check ke database, username & email nya exist
            let findUsernameEmail = await users.findOne({
                where: {
                    [Op.and]: [
                        {username: username}, 
                        {email: email}
                    ]
                }
            }, {transaction: t})
            if(findUsernameEmail)
                return res.status(404).send({
                    isError: true,
                    message: 'username & email already exist',
                    data: null
                })
            
            // step 4: simpan data ke database
            let resCreateUser = await users.create({id: uuidv4(), username, email, password}, {transaction: t})

            await users_address.create({receiver: 'fauzan', address: 'jl. abc', users_id: resCreateUser.dataValues.id}, {transaction: t})

            // step 5: kirim response
            await t.commit()
            res.status(201).send({
                isError: false,
                message: 'register user success',
                data: null
            })
        } catch (error) {
            res.status(400).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    updateUser: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'update user success',
            data: null
        })
    },

    deleteUser: (req, res) => {
        res.status(200).send({
            isError: false,
            message: 'delete user success',
            data: null
        })
    }
    
}