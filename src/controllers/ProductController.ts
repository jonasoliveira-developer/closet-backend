import { request, Request, Response } from "express";
import ProductRepository from "../repositories/Product/ProductRepository";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import PaginatedProductService from "../services/PaginetedProductService";
import UpdateProductService from "../services/UpdateProductService";


class ProductController {
    public async index(request:Request, response: Response): Promise<Response> {
        const productRepository = new ProductRepository()

       const products = await productRepository.findAll()
       return response.json(products)
    }

    public async paginated(request:Request, response: Response): Promise<Response> {
        const {page} = request.query

        const productRepository = new ProductRepository()
        const productsPaginated = new PaginatedProductService(productRepository)

        const pageNumber = page !== undefined ? parseInt(page.toString(), 10) : 0

       const products = await productsPaginated.execute(pageNumber)
       
       return response.json(products)
    }

    
    public async search(request:Request, response: Response): Promise<Response> {
        const {name} = request.query

        const productRepository = new ProductRepository()
       const products = await productRepository.findAllByName(name?.toString() || '')
       
       return response.json(products)
    }

    

    public async create(request:Request, response: Response): Promise<Response>{
        const productRepository = new ProductRepository()
        const creteProduct = new CreateProductService(productRepository)
          
        const {name, photo, value} = request.body

        const product = await creteProduct.execute({
            name,
            photo,
            value
        })

        return response.status(201).json(product)

    }

    public async update(request:Request, response: Response): Promise<Response>{
        const {id} = request.params
        const {name, photo, value} = request.body

        const productRepository = new ProductRepository()
        const updateProduct = new UpdateProductService(productRepository)
          
       

        const product = await updateProduct.execute({
            id,
            name,
            photo,
            value
        })

        return response.json(product)

    }

    public async destroy(request:Request, response: Response): Promise<Response>  {
        const {id} = request.params

        const productRepository = new ProductRepository
        const productService = new DeleteProductService(productRepository)

        await productService.execute(id)

        return response.status(204).send()

    }
        
}


export default ProductController