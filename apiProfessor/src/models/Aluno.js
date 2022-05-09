const Sequelize = require('sequelize')
const database = require('../config/database')

const Aluno = database.define('aluno', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(80),
    allowNull: false
  }
})

module.exports = Aluno
