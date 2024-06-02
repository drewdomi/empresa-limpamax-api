import { Router } from 'express'
import { productRouter } from './product-routes'

const routes = Router()

routes.use(productRouter)

export { routes }
