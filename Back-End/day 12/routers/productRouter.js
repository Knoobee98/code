const express = require('express')
const router = express.Router()
const { productController } = require('../controllers')

const upload = require('./../middleware/upload')

router.post('/create', upload, productController.createProduct)
router.get('/', productController.getProducts)

module.exports = router