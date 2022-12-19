const productController = require('./../controllers')
const express = require('express')
const router = express.Router()

router.get('/get', productController.productController.getProduct)
router.get('/get/:id', productController.productController.getProductId)
router.post('/create', productController.productController.createProduct)
router.patch('/update/:id', productController.productController.updateProduct)
router.delete('/delete/:id', productController.productController.deleteProduct)

module.exports = router