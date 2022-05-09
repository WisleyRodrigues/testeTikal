const { param, validationResult } = require('express-validator')

exports.validateReadAluno = [
  param('alunoId')
    .notEmpty()
    .withMessage('O id do aluno não pode estar vazio')
    .isNumeric()
    .withMessage('Id de aluno invalido'),
  (req, res, next) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }
    next()
  }
]
