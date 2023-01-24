const express = require('express')
const router = express.Router()

const { busController } = require('../controllers')

router.post('/search', busController.searchBy)
router.get('/detail/:id', busController.detailBus)

module.exports = router