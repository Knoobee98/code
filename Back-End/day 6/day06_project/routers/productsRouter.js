const express = require('express');
const Router = express.Router();
const { productRouter } = require('./../controllers');

Router.get('/search', productRouter.getProducts);
Router.post('/add', productRouter.postProducts);

module.exports = Router;