import { Router } from 'express'
import { AuthControler } from '../controllers/auth-controller'

const authRouter = Router()

authRouter.post('/login', AuthControler.login)

export { authRouter }
