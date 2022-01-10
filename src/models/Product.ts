import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,ManyToMany, ManyToOne, JoinTable } from "typeorm";

import Sale from "./Sale";

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    photo:string

    @Column()
    name:string

    @Column()
    value:number

    @ManyToMany(type => Sale, product => Product)
    sale: Sale[]
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Product