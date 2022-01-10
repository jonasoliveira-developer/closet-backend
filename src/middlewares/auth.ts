import {Request, Response, NextFunction} from 'express'
import AppError from '../errors/AppError'
import {verify} from 'jsonwebtoken'

const authenticate = (
    request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization

    if(!authHeader) {
        throw new AppError(401, 'Token ausente na requisição')
    }

    const [, token] = authHeader.split(' ')

    try {
        verify(token, process.env.SECRET as string)
        next()
    }
    catch{
        throw new AppError(401, 'Token Inválido') 
    }
}

export default authenticate