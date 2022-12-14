const express = require('express')
const Router = express.Router()

//import all controllers
const { expenseController } = require('./../controllers')

Router.get('/get', expenseController.getExpenses)
Router.get('/details/:id', expenseController.getDetails)
Router.post('/add', expenseController.addExpenses)
Router.get('/total', expenseController.totalByRange)


module.exports = Router