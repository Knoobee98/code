const express = require('express')
const router = express.Router()
const { productController } = require('../controllers')

const upload = require('./../middleware/upload')

router.post('/create', upload, productController.createProduct)
router.delete('/delete/:id', productController.deleteProduct)
router.patch('/update/:products_images_id', upload, productController.updateProduct)

module.exports = router