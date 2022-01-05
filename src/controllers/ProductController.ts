import { request, Request, Response } from "express";
import ProductRepository from "../repositories/Product/ProductRepository";
import CreateProductService from "../services/CreateProductService";


class ProductController {
    public async index(request:Request, response: Response): Promise<Response> {
        const productRepository = new ProductRepository()

       const products = await productRepository.findAll()
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
}


export default ProductController