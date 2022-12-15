const express = require('express')
const Router = express.Router()

const { studentController } = require('../controllers')

Router.get('/get', studentController.getAllStudents)
Router.post('/add', studentController.addStudents)

module.exports = Router;