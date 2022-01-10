import AppError from "../errors/AppError"
import IProductRepository from "../repositories/Product/IProductRepository"

class DeleteProductService {

    private productRepository: IProductRepository

    constructor (productRepository: IProductRepository) {
        this.productRepository = productRepository
    }

    public async execute(id: string): Promise<void> {
        const product = await this.productRepository.findById(id)
        if(!product) {
            throw new AppError(400, "Produto não encontrado!!")
        }

       await this.productRepository.delete(id)
    }
}

export default DeleteProductService