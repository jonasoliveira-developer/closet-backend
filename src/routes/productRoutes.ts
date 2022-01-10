import {Router} from 'express'
import ProductController from '../controllers/ProductController'

import authenticate from '../middlewares/auth'

const productRouter = Router()
const productController = new ProductController()

productRouter.get('/', productController.index)
productRouter.get('/paginated', productController.paginated)
productRouter.get('/search', productController.search)
productRouter.post('/', productController.create)
productRouter.put('/:id', productController.update)
productRouter.delete('/:id', productController.destroy)


export default productRouter