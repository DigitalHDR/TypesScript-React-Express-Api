import { Router, Request, Response, NextFunction } from 'express'

const router = Router()

export default router.get(
  '/test',
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('API WORKING!')
  }
)
