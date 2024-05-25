import { Router } from 'express'
import { zodMiddleware } from '../middlewares/zod-middleware'
import { productService } from '../services/product-service'
import { createProductSchema } from '../utils/schemas/create-product'

const productRouter = Router()

productRouter.get('/products', productService.findAll)
productRouter.post(
  '/products/create',
  zodMiddleware(createProductSchema),
  productService.create,
)
productRouter.patch('/products/update/:cod_barras')

export { productRouter }
