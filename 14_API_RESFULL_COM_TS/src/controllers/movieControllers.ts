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

export async function findMovieById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: 'O filme nao existe' })
    }

    return res.status(200).json(movie)
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }
}
