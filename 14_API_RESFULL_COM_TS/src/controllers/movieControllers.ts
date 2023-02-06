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
    try {
      const data = req.body
      const movie = await MovieModel.create(data)
      return res.status(201).json(movie)
    } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
    }
}
