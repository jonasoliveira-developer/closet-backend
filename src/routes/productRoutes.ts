import {Router} from 'express'
import ProductController from '../controllers/ProductController'

const productRouter = Router()
const productController = new ProductController()

productRouter.get('/', productController.index)
productRouter.post('/', productController.create)

export default productRouter