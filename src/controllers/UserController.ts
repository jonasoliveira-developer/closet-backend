import { Request, Response } from "express";
import User from "../models/User";
import UserRepository from "../repositories/User/UserRepository";
import CreateUserService from "../services/CreateUserService";

class UserController {

    public async create(request: Request, response: Response): Promise<Response> {
        
        const {name, phone, password, store} = request.body

        const userRepository = new UserRepository()
        const createUser = new CreateUserService(userRepository)

        const user = await createUser.execute({
            name,
            phone,
            store,
            password
        })
         user.password = ''
        return response.json(user)
    
    }
}

export default UserController