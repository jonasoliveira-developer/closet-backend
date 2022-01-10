import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,OneToMany} from 'typeorm'

import Sale from './Sale'

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

    @OneToMany(type => Sale, user => User)
    sale: Sale[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default User
