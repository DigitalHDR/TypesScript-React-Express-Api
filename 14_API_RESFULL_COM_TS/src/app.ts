import express from 'express'
import config from 'config'

const app = express()

// JSON MIDDLEWARE
app.use(express.json())

// MONGODB BANCO DE DADOS
import db from '../config/db'

// ROUTES
import router from './router'

app.use('/api/', router)

// APP PORT
const port = config.get<number>('port')

app.listen(3000, async () => {
  await db()
  console.log(`Aplicação está funcionando na porta: ${port}`)
})
