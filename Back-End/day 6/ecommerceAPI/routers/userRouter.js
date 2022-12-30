const express = require('express')
const Router = express.Router()

const {userController} = require('../controllers')

const {tokenVerify} = require('../middleware/verifyToken')

Router.get('/get', userController.getUser)
Router.post('/register', userController.registerUser)
Router.post('/login', userController.loginUser)
Router.get('/keep-login', tokenVerify ,userController.keepLogin)

module.exports = Router