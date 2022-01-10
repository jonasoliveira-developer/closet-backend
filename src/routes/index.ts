import {Router} from 'express'
import userRouter from './userRoutes'
import sessionRouter from './sessionRoutes'
import productRouter from './productRoutes'
import saleRouter from './saleRoutes'

const routes = Router()
const prefixRoutes = '/closet'

routes.use(`${prefixRoutes}/users`, userRouter)
routes.use(`${prefixRoutes}/sessions`, sessionRouter)
routes.use(`${prefixRoutes}/products`, productRouter)
routes.use(`${prefixRoutes}/sales`, saleRouter)


export default routes