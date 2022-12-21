const express = require('express')
const Router = express.Router()

const {userController} = require('../controllers')

Router.get('/get', userController.getUser)
Router.post('/register', userController.registerUser)
Router.post('/login', userController.loginUser)

module.exports = Router