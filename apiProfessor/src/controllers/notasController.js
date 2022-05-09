const Nota = require('../models/Nota')

async function list (req, res) {
  const notas = await Nota.findAll({
    include: [
      Nota.Aluno
    ]
  })

  res.status(200)
  res.send(notas)
}

async function create (req, res) {
  const { nome, notas: [n1, n2, n3, n4, n5] } = req.body

  const register = await Nota.create({
    aluno: {
      nome
    },
    n1,
    n2,
    n3,
    n4,
    n5
  }, {
    include: [{
      association: Nota.Aluno
    }]
  })

  res.status(200)
  res.send(register)
}

module.exports = { create, list }
