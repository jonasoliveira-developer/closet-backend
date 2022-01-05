import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
class Product {
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    photo:string

    @Column()
    name:string

    @Column()
    value:number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Product