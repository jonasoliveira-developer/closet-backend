import {Router} from 'express'
import userRouter from './userRoutes'
import sessionRouter from './sessionRoutes'
import productRouter from './productRoutes'

const routes = Router()
const prefixRoutes = '/closet'

routes.use(`${prefixRoutes}/users`, userRouter)
routes.use(`${prefixRoutes}/sessions`, sessionRouter)
routes.use(`${prefixRoutes}/products`, productRouter)


export default routes