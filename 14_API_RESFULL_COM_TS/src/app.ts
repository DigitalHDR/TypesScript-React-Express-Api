import express from 'express'
import config from 'config'

const app = express()

//JSON MIDDLEWARE
app.use(express.json())

// APP PORT
const port = config.get<number>('port')

app.listen(3000, async() => {
    console.log(`Aplicação está funcionando na porta: ${port}`)
})