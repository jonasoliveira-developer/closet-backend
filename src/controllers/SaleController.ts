import Sale from "../models/Sale"
import {Request, response, Response} from 'express'
import SaleRepository from "../repositories/Sale/SaleRepository"
import CreateSaleService from "../services/CreateSaleService"
import ProductRepository from "../repositories/Product/ProductRepository"

class SaleController {
    public async index(request: Request, response: Response): Promise<Response>{ 
        const saleRepository = new SaleRepository()

        const sales = await saleRepository.findAll()
        return response.json(sales)
    }

    public async create(request:Request, response: Response): Promise<Response> {
        const {client, phone_client,  userId,product} = request.body

        const saleRepository = new SaleRepository()
        const productRepository = new ProductRepository()
        const saleService = new CreateSaleService(saleRepository, productRepository )

        const sale = await saleService.execute({client, phone_client,  userId,product})

        return response.json(sale)
    }
}

export default SaleController