import Product from "../models/Product";
import IProductRepository from "../repositories/Product/IProductRepository";


import IPaninated from "../interfaces/paginated";

class PaginatedProductService {
    private paginatedRepository: IProductRepository

    constructor(paginatedRepository: IProductRepository) {
        this.paginatedRepository = paginatedRepository
    }

    public async execute(page: number): Promise<IPaninated<Product>> {
        const [products, total] = await this.paginatedRepository.findAllPaginated(page*10)

        const totalPages = Math.ceil(total/10)

        const response: IPaninated<Product> = {
            data:products,
            totalElements: total,
            page,
            elements: products.length,
            elementsPerPage:10,
            totalPages,
            firstPage: page === 0,
            lastPage: page === total - 1

        }

        return response
    }   
}


export default PaginatedProductService