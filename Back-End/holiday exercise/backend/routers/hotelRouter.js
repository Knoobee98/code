const express = require('express')
const Router = express.Router()

const hotelController = require('./../controllers/hotelController');

Router.post('/search', hotelController.search)
Router.get('/detail/:id', hotelController.detail)

module.exports = Router