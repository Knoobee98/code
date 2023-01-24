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
        const {username, email, password, role} = req.body;
        const t = await sequelize.transaction();
        try {
            if(!username.length || !email.length || !password.length || !role.length)
                return res.status(404).send({
                    isError: true,
                    message: 'all data must be filled',
                    data: null
                })
            
                let findUsernameEmail = await users.findOne({
                    where: {
                        [Op.and] : [
                            {username: username},
                            {email: email}
                        ]
                    }
                }, {transaction: t})

                if(findUsernameEmail) return res.status(404).send({
                    isError: true,
                    message: 'username or email already exist',
                    data: null
                })

                let createUser = await users.create({
                    id: uuidv4(),
                    username,
                    email,
                    password: await hashPassword(password),
                    role
                }, {transaction: t})

                await t.commit();

                res.status(201).send({
                    isError: false,
                    message: 'register success',
                    data: null
                })
        } catch (error) {
            t.rollback();
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    login: async(req, res) => {
        const {usernameEmail, password} = req.body;
        const t = await sequelize.transaction();
        try {
            if(!usernameEmail.length || !password.length) return res.status(404).send({
                isError: true,
                message: 'all data must be filled',
                data: null
            })

            // find username or email
            let findUser = await users.findOne({
                where: {
                    [Op.or]: [
                        {username: usernameEmail},
                        {email: usernameEmail}
                    ]
                }
            })

            if(!findUser) return res.status(404).send({
                isError: true,
                message: 'username or email not found',
                data: null
            })

            //compare and verify password
            let checkPassword = await hashMatch(password, findUser.password)

            if(!checkPassword) return res.status(404).send({
                isError: true,
                message: 'password not match',
                data: null
            })

            //create token
            const token = await generateToken({
                id: findUser.id,
            })

            res.status(201).send({
                isError: false,
                message: 'login success',
                data: null
            })
            
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    keepLogin: (req, res) => {
        res.status(201).send({
            isError: false,
            message: 'keep-login',
            data: {
                token: req.headers.auth
            }
        })
    }
}