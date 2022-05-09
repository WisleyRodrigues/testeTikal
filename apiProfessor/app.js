const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const debug = require('debug')('apiprofessor:db')

const db = require('./src/config/database')
const Aluno = require('./src/models/Aluno')
const Nota = require('./src/models/Nota')

const indexRouter = require('./src/routes/index')

const app = express()

app.use(cors())
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

db.sync(() => debug(`Banco de dados conectado: ${process.env.DB_NAME}`))

module.exports = app
