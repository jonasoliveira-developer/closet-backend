import { Request, request, Response } from "express"
import UserRepository from "../repositories/User/UserRepository"
import SessionService from "../services/SessionService"

class SessionController {
    
    public async create(request: Request, response: Response): Promise<Response> {
        const {phone, password} = request.body

        const  userRepository = new UserRepository()
        const  createSession = new SessionService(userRepository)

        const session = await createSession.execute({
            phone,
            password
        })

        return response.json(session)
    }
}

export default SessionController