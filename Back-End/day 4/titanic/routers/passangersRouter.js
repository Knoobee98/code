const express = require('express')
const Router = express.Router()

const {passangersController} = require('../controllers')
Router.get('/getAll', passangersController.getPassangers)
Router.get('/getByName', passangersController.getPassangersName)
Router.get('/getTotalSurvived', passangersController.getTotalSurvived)
Router.get('/getTotalSurvivedByGender', passangersController.getTotalSurvivedByGender)
Router.get('/getTotalSurvivedByClass', passangersController.getTotalSurvivedByClass)

Router.get('/test', passangersController.test)

module.exports = Router