import { Router } from 'express'
import { zodMiddleware } from '../middlewares/zod-middleware'
import { loginSchema } from '../utils/schemas/login-schema'
import { authService } from '../services/auth-service'

const authRouter = Router()

authRouter.post('/login', zodMiddleware(loginSchema), authService.login)

export { authRouter }
