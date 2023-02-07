import { Router, Request, Response, NextFunction } from 'express'
import { createMovie } from './controllers/movieControllers'

// VALIDATIONS
import { validate } from './middlewere/handleValidation'
import { movieCreateValidation } from './middlewere/movieValidation'

const router = Router()

export default router
  .get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('API WORKING!')
  })
  .post('/movie', movieCreateValidation(), validate, createMovie)
