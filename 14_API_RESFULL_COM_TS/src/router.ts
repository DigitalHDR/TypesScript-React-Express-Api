import { Router, Request, Response, NextFunction } from 'express'
import { createMovie, findMovieById } from './controllers/movieControllers'

// VALIDATIONS
import { validate } from './middlewere/handleValidation'
import { movieCreateValidation } from './middlewere/movieValidation'

const router = Router()

export default router
  .get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('API WORKING!')
  })
  .post('/movie', movieCreateValidation(), validate, createMovie)
<<<<<<< HEAD
  .get('/movie/:id', findMovieById)
=======
>>>>>>> 743372ae215780da86913f79bfe269b6e4203540
