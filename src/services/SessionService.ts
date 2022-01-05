import { compare } from "bcryptjs"
import AppError from "../errors/AppError"
import { sign } from "jsonwebtoken"
import IUserRepository from "../repositories/User/IUserRepository"
import UserRepository from "../repositories/User/UserRepository"
import User from "../models/User"
import dotenv from 'dotenv'

dotenv.config()

interface Request {
    phone:string
    password:string
}

interface Response {
    token:string
    user: User
}

class SessionService {
    private userRepository: IUserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    public async execute({phone, password}: Request): Promise<Response> {
        const user = await this.userRepository.findByPhone(phone)

        if(!user) {
           throw new AppError(401, 'Telefone inválido')
        }

        const passwordCompare = await compare(password, user.password)

        
        if(!passwordCompare) {
            throw new AppError(401, 'Senha não confere')
         }

         const token = sign({}, process.env.SECRET as string, {
             expiresIn: '2h'
         })

         return {
             user,
             token
         }

    }
}


export default SessionService