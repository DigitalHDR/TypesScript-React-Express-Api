// ENV VARIAVEIS
require('dotenv').config()

import express from 'express'
import config from 'config'

const app = express()

// JSON MIDDLEWARE
app.use(express.json())

// MONGODB BANCO DE DADOS
import db from '../config/db'

// ROUTES
import router from './router'

// LOGGER WINSTON
import Logger from '../config/logger'

app.use('/api/', router)

// APP PORT
const port = config.get<number>('port')

app.listen(3000, async () => {
  await db()
  Logger.info(`Aplicação está funcionando na porta: ${port}`)
})
