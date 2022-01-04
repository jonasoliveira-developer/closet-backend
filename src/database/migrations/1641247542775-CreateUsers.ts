import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1641247542775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'users',
            columns: [
                {
                    name:'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy:'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',

                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'store',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
