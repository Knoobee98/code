const express = require('express')
const Router = express.Router()

const { studentController } = require('../controllers')

Router.get('/get', studentController.getAllStudents)

module.exports = Router;