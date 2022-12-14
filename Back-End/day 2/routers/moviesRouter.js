const express = require('express')
const Router = express.Router()

//import all controllers
const { moviesController } = require('./../controllers')

Router.get('/get-all', moviesController.getAll)
Router.get('/get', moviesController.getBy)

module.exports = Router