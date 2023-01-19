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
const { createToken, validateToken } = require('./../lib/token')

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
                    password: hashPassword(password),
                    role
                }, {transaction: t})

                await t.commit();

                res.status(2001).send({
                    isError: false,
                    message: 'register success',
                    data: createUser
                })
        } catch (error) {
            res.status(404),send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    }
}