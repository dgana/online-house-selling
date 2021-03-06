var express = require('express')
var router = express.Router()
var housesController = require('../controllers/housesController.js')

router.post('/seed', housesController.seed)
router.get('/', housesController.list)
router.get('/:id', housesController.show)
router.post('/', housesController.create)
router.put('/:id', housesController.update)
router.delete('/:id', housesController.remove)

module.exports = router
