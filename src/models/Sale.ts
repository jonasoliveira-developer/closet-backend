import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import SaleStatusEnum from "../enums/SaleStatusEnum";
import Product from "./Product";
import User from "./User";

@Entity('sales')

class Sale {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    client: string

    @Column()
    userId: string

    @Column()
    phone_client: string

    @Column({type: 'varchar'})
    status:SaleStatusEnum


    @ManyToOne(type => User, sale => Sale) 
    user: User

    @ManyToMany(type => Product, {eager: true})
    @JoinTable()
    product: Product[]

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}

export default Sale