import IUserRepository from "../repositories/User/IUserRepository"
import UserRepository from "../repositories/User/UserRepository"
import {hash} from 'bcryptjs'

interface Request {
    name:string
    phone:string
    password:string
    store:string
}

class CreateUserService {
    private userRepository: IUserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }


    public async execute({name, phone, password, store}: Request) {
        const passwordHash = await hash(password, 8)

        const user = await this.userRepository.create({
            name,
            phone,
            password:passwordHash,
            store
        })

        return user
    }
}

export default CreateUserService