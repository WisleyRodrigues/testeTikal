const Sequelize = require('sequelize')
const database = require('../config/database')

const Aluno = require('./Aluno')

const Nota = database.define('notas', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  n1: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  n2: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  n3: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  n4: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  media: {
    type: Sequelize.VIRTUAL,
    get () {
      return (this.n1 + this.n2 + this.n3 + this.n4) / 4
    },
    set (value) {
      throw new Error('Não insira o campo de media, o mesmo é calculado automaticamente')
    }
  },
  situacao: {
    type: Sequelize.VIRTUAL,
    get () {
      if (this.media >= 6) {
        return 'Aprovado'
      } else if (this.media >= 4) {
        return 'Recuperação'
      } else {
        return 'Reprovado'
      }
    },
    set (value) {
      throw new Error('Não insira o campo de media, o mesmo é calculado automaticamente')
    }
  }
})

Nota.Aluno = Nota.belongsTo(Aluno, { targetKey: 'id', foreignKey: 'aluno_id' })

module.exports = Nota
