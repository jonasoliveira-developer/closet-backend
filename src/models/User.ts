import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('users')

class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name:string

    @Column({unique: true})
    phone:string

    @Column()
    password:string

    @Column()
    store:string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default User
