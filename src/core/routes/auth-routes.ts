import { Router } from 'express'
import { AuthControler } from '../controllers/auth-controller'
import { zodMiddleware } from '../middlewares/zod-middleware'
import { loginSchema } from '../utils/schemas/login-schema'

const authRouter = Router()

authRouter.post('/login', zodMiddleware(loginSchema), AuthControler.login)

export { authRouter }
