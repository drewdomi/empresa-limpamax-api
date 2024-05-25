import { Router } from 'express'
import { zodMiddleware } from '../middlewares/zod-middleware'
import { loginSchema } from '../utils/schemas/login-schema'
import { accountService } from '../services/account-service'

const accountRouter = Router()

accountRouter.post('/login', zodMiddleware(loginSchema), accountService.login)
accountRouter.post('/register', accountService.register)

export { accountRouter }
