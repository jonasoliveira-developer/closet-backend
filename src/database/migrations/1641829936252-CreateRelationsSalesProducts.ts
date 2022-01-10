import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationsSalesProducts1641829936252 implements MigrationInterface {
    name = 'CreateRelationsSalesProducts1641829936252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales_product_products" ("salesId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_0a2242d254d8d3d099db91caf3d" PRIMARY KEY ("salesId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8c1698a9f6ad170f56f5d1afe3" ON "sales_product_products" ("salesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3b83555ec28f7c4e2f5121a443" ON "sales_product_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "sales_product_products" ADD CONSTRAINT "FK_8c1698a9f6ad170f56f5d1afe33" FOREIGN KEY ("salesId") REFERENCES "sales"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sales_product_products" ADD CONSTRAINT "FK_3b83555ec28f7c4e2f5121a4437" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_product_products" DROP CONSTRAINT "FK_3b83555ec28f7c4e2f5121a4437"`);
        await queryRunner.query(`ALTER TABLE "sales_product_products" DROP CONSTRAINT "FK_8c1698a9f6ad170f56f5d1afe33"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3b83555ec28f7c4e2f5121a443"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8c1698a9f6ad170f56f5d1afe3"`);
        await queryRunner.query(`DROP TABLE "sales_product_products"`);
    }

}
