const express = require('express')
const Router = express.Router()

//import all contorllers
const { usersController } = require('./../controllers')

//import all middlewares


Router.post('/register', usersController.register)