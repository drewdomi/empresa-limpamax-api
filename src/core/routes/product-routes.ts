import { Router } from 'express'
import { zodMiddleware } from '../middlewares/zod-middleware'
import { productService } from '../services/product-service'
import {
  addQuantidadeProduto,
  createProductSchema,
  rmQuantidadeProduto,
} from '../utils/schemas/'

const productRouter = Router()

productRouter.get('/products', productService.findAll)

productRouter.post(
  '/products/create',
  zodMiddleware(createProductSchema),
  productService.create,
)

productRouter.patch(
  '/products/add',
  zodMiddleware(addQuantidadeProduto),
  productService.addQuantidade,
)

productRouter.patch(
  '/products/rm',
  zodMiddleware(rmQuantidadeProduto),
  productService.rmQuantidade,
)

export { productRouter }
