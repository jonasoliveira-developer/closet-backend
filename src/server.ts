import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request,Response } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import AppError from './errors/AppError'
dotenv.config()
import './database'


const app = express()


app.use(express.json())
app.use( routes)

app.use((err: Error, request: Request, response:Response, _:NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode)
            .json({status:'error', message:err.message})
    }

    return response.status(500)
       .json({status:'error', message:err})
})


app.listen(process.env.PORT || 3433)

