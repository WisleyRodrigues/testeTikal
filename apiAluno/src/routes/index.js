const express = require('express')
const router = express.Router()

const alunosController = require('../controllers/alunosController')

const { validateReadAluno } = require('../middleware/validator/alunoValidator')

router.get('/alunos/:alunoId/notas', validateReadAluno, alunosController.read)

module.exports = router
