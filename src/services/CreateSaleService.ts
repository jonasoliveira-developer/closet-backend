import SaleStatusEnum from "../enums/SaleStatusEnum";
import AppError from "../errors/AppError";
import IProductRepository from "../repositories/Product/IProductRepository";
import ISaleRepository from "../repositories/Sale/ISaleRepository";

interface Id {
    id:string
}
interface Request {
    product: Id[]
    userId: string
    client:string
    phone_client:string
}

class CreateSaleService {
    private ormRepository: ISaleRepository
    private productRepository: IProductRepository

    constructor(ormRepository: ISaleRepository,productRepository: IProductRepository ) {
        this.ormRepository = ormRepository
        this.productRepository = productRepository
    }

    public async execute({client, phone_client,  userId, product} : Request) {
       

        const sale = await this.ormRepository.create({
            product,
            userId,
            status: SaleStatusEnum.OPEN,
            client,
            phone_client,
        })
        return sale

    }
}

export default CreateSaleService