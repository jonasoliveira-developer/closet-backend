import { getRepository, Repository } from "typeorm";
import CreateSaleDTO from "../../dtos/CreateSaleDTO";
import Sale from "../../models/Sale";
import ISaleRepository from "./ISaleRepository";

class SaleRepository implements ISaleRepository {
    private ormRepository: Repository<Sale>

    constructor() {
        this.ormRepository = getRepository(Sale)
    }


   public async findAll(): Promise<Sale[]> {
        return this.ormRepository.find({
            relations: ['product', 'user']
        })
    }
   public async findById(id: string): Promise<Sale | undefined> {
         return this.ormRepository.findOne(id, {
             relations: ['product', 'user']
         })
    }
   public async create({client,phone_client , userId, status,product}: CreateSaleDTO): Promise<Sale> {
       const sale = this.ormRepository.create({
           userId,
           status,
           client,
           phone_client,
           product
       })
       await this.ormRepository.save(sale)
       return sale
         
    }
   public async seve(sale: Sale): Promise<Sale> {
    return this.ormRepository.save(sale)
    }

}

export default SaleRepository