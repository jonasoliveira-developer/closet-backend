import AppError from "../errors/AppError"
import IProductRepository from "../repositories/Product/IProductRepository"
import ProductRepository from "../repositories/Product/ProductRepository"
import Product from '../models/Product'
interface Request {
    id:string
    name:string
    photo:string
    value:number
}
class UpdateProductService {
    private prouctRepository: IProductRepository

    constructor(productRepository: ProductRepository) {
        this.prouctRepository = productRepository
    }

    public async execute({id, name, photo,value}: Request): Promise<Product> {
       const product = await this.prouctRepository.findById(id)

       if(!product) {
           throw new AppError(400, 'Produto não cadastrado')
       }
       product.name = name
       product.photo = photo
       product.value = value

       await this.prouctRepository.save(product)
       return product
    }
}

export default UpdateProductService