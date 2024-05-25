import { Router } from 'express'
import { productService } from '../services/product-service'

const productRouter = Router()

productRouter.get('/products', productService.findAll)
productRouter.post('/products/create', productService.create)
productRouter.patch('/products/update/:cod_barras')

export { productRouter }
