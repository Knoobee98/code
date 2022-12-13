const express = require('express');
const Router = express.Router();

// import all controller
const {productsController} = require('./../controllers'); //akan otomatis mengambil semua controller yang ada di folder controllers

// import auth
const Auth = require('./../middleware/authorization');

Router.get('/get', productsController.getProducts);
Router.post('/post', Auth, productsController.postProducts);
Router.patch('/update/:id', productsController.patchProducts);
Router.delete('/delete/:id', productsController.deleteProducts);

module.exports = Router;