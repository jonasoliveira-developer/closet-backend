import CreateSaleDTO from "../../dtos/CreateSaleDTO";
import Sale from "../../models/Sale";

interface ISaleRepository {
    findAll(): Promise<Sale[]>
    findById(id: string): Promise<Sale | undefined>
    create(createSaleDTO: CreateSaleDTO): Promise<Sale>
    seve(sale: Sale): Promise<Sale>
}

export default ISaleRepository