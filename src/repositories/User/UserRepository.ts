import { getRepository, Repository } from "typeorm";
import CreateUserDTO from "../../dtos/CreateUserDTO";
import User from "../../models/User";
import IUserRepository from "./IUserRepository";

class UserRepository implements IUserRepository {
   private ormRepository: Repository<User>

   constructor() {
       this.ormRepository = getRepository(User)
   }

   public async findByPhone(phone: string): Promise<User | undefined> {
      const user = await this.ormRepository.findOne({
          where: {phone}
      })

      return user
    }
   public async create({name, phone, password, store}: CreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            phone,
            store,
            password
        })

        await this.ormRepository.save(user)
        return user
    }

}

export default UserRepository