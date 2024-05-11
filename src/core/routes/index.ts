import { Router } from 'express'
import { accountRouter } from './account-routes'

const routes = Router()

routes.use(accountRouter)

export { routes }
