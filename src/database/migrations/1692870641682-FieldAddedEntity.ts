import { MigrationInterface, QueryRunner } from "typeorm";

export class FieldAddedEntity1692870641682 implements MigrationInterface {
    name = 'FieldAddedEntity1692870641682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "user_update" TO "updateAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "user_update"`);
    }

}
