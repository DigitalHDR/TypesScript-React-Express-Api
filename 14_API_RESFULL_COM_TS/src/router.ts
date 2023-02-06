import { Router, Request, Response, NextFunction } from 'express'
import { createMovie } from './controllers/movieControllers'

const router = Router()

export default router.get(
  '/test',
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('API WORKING!')
  }
).post('/movie', createMovie)
