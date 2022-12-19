const express = require('express');
const router = express.Router();
const { mycontroller } = require('../controllers');


Router.get('/', mycontroller.index);

module.exports = router;
