const { check, validationResult } = require('express-validator')

exports.validateNotaCreate = [
  check('nome')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('O nome do aluno não pode estar vazio!')
    .bail(),
  check('notas')
    .isArray({ min: 5, max: 5 })
    .withMessage('As notas do aluno devem ser um array com 5 notas'),
  check('notas.*')
    .isInt({ min: 0, max: 10 })
    .withMessage('As notas do aluno devem ser valores de 0 a 10'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }) }
    next()
  }
]
