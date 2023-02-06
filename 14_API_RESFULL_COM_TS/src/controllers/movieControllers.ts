import { NextFunction, Request, Response } from 'express'

// MODEL
import { MovieModel } from '../models/Movie'

//LOGGER
import Logger from '../../config/logger'

export async function createMovie(
  req: Request,
  res: Response,
  next: NextFunction
) {
    return res.status(200).send('Deu certo o controller')
}
