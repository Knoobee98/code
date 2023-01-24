const express = require('express')
const router = express.Router()

const { usersController } = require('../controllers')
const jwtVerify = require('./../middleware/jwtVerify')

 
router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.post('/keep-login', jwtVerify, usersController.keepLogin)

module.exports = router