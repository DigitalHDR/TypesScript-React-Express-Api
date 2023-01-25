//1 iniciando o projeto
// console.log('express + ts!!!')

//2 init express
import express, { Request, Response } from 'express'

const app = express()

//3 rota com post
app.use(express.json())

app.get('/', (req, res, next) => {
  return res.send('hello express')
})

//3 rota com post
app.post('/api/product', (req, res, next) => {
  console.log(req.body)

  return res.send('Produto add')
})

//4 rota para todos os verbos
app.all('/api/product/check', (req, res, next) => {
  // req.method = verbo http

  if (req.method === 'POST') {
    return res.send('inseriu algum registro')
  } else if (req.method === 'GET') {
    return res.send('leu algum registro')
  } else {
    res.send('não podemos realizar esta operação')
  }
})

//5 interface do express
app.get('/api/interfaces', (req: Request, res: Response, next) => {
  return res.send('utilizando as interfaces')
})

app.listen(3000, () => {
  console.log('app rodando')
})

//! requisição é tudo que vir para você

//! resposta é o que você vai enviar como resposta
