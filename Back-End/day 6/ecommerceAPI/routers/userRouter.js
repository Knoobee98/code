const userController = require('./../controllers')
const express = require('express')
const router = express.Router()

router.get('/get', userController.userController.getUser)
router.get('/get/:id', userController.userController.getUSerId)
router.post('/create', userController.userController.createUser)
router.patch('/update/:id', userController.userController.updateUser)
router.delete('/delete/:id', userController.userController.deleteUser)

module.exports = router