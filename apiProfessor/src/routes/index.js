const express = require('express')
const router = express.Router()

const notasController = require('../controllers/notasController')

const { validateNotaCreate } = require('../middleware/validator/notaValidator')

router.get('/admin/notas', notasController.list)
router.post('/admin/notas', validateNotaCreate, notasController.create)

module.exports = router
