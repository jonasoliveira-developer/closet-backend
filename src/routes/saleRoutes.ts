import {Router} from 'express'
import SaleController from '../controllers/SaleController'
import authenticate from '../middlewares/auth'

const saleRouter = Router() 

const saleController = new SaleController()


saleRouter.get('/', saleController.index)
saleRouter.post('/', saleController.create)


export default saleRouter