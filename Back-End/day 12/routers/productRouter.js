const express = require('express')
const router = express.Router()
const { productController } = require('../controllers')

const upload = require('./../middleware/upload')

router.post('/create', upload, productController.createProduct)

module.exports = router