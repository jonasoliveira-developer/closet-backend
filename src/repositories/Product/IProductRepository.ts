import Product from "../../models/Product";
import CreateProductDTO from "../../dtos/CreateProductDTO";

export default interface IProductRepository {
    findAll(): Promise<Product[]>
    findAllByName(name: string): Promise<Product[]>
    findAllPaginated(page: number): Promise<[Product[], number]>
    findById(id: string): Promise<Product | undefined>
    create(createProductDTO: CreateProductDTO): Promise<Product>
    save(product: Product): Promise<Product>
    delete(id: string): Promise<void>
    
}