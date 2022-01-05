import IProductRepository from "../repositories/Product/IProductRepository"
import ProductRepository from "../repositories/Product/ProductRepository"
import Product from '../models/Product'

 interface Request{
    photo?: string
    name: string
    value: number
}

class CreateProductService {
    private productRepository: IProductRepository

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository
    }

    public async execute({name,photo,value}: Request): Promise<Product> {
        const products = await this.productRepository.create({
            name,
            photo,
            value
        })

        return products
    }
}

export default CreateProductService