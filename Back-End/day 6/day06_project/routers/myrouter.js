const express = require('express');
const Router = express.Router();
const { mycontroller } = require('../controllers');


Router.get('/', mycontroller.index);

module.exports = Router;
