import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'
import { isValidReqBody } from '../utils/validators/is-valid-req-body'

export const zodMiddleware =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (!isValidReqBody(req))
      return res.status(400).send({ message: 'Requesição inválida' })
    try {
      console.log(req.body)
      await schema.parseAsync({ body: req.body })
      return next()
    } catch (error) {
      if (error instanceof ZodError)
        return res.status(401).json({ message: error.issues[0].message })

      return res.status(500).json({ message: 'Erro nas válidações' })
    }
  }
