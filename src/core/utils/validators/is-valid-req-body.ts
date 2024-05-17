import { Request } from 'express'

export function isValidReqBody(req: Request) {
  if (Object.keys(req.body).length == 0) return false
  return true
}
