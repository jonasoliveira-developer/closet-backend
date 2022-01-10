import SaleStatusEnum from "../enums/SaleStatusEnum";

interface Id {
    id:string
}
interface CreateSaleDTO {
    product: Id[]
    userId: string
    status: SaleStatusEnum
    client: string
    phone_client: string
}

export default CreateSaleDTO