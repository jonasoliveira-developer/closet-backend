import Product from "../../models/Product";
import CreateProductDTO from "../../dtos/CreateProductDTO";

export default interface IProductRepository {
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product | undefined>
    create(createProductDTO: CreateProductDTO): Promise<Product>
    save(product: Product): Promise<Product>
    
}