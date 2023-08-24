import { MigrationInterface, QueryRunner } from "typeorm";

export class FieldAddedEntity1692866442583 implements MigrationInterface {
    name = 'FieldAddedEntity1692866442583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "post" ("post_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "post_name" character varying NOT NULL, "post_order" integer NOT NULL, "post_create" TIMESTAMP NOT NULL DEFAULT now(), "post_update" TIMESTAMP NOT NULL DEFAULT now(), "post_delete" TIMESTAMP, "user_id" uuid NOT NULL, CONSTRAINT "PK_4d093caee4d33b2745c7d05a41d" PRIMARY KEY ("post_id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_name" character varying NOT NULL, "user_phone_number" character varying NOT NULL, "user_create" TIMESTAMP NOT NULL DEFAULT now(), "user_update" TIMESTAMP NOT NULL DEFAULT now(), "user_delete" TIMESTAMP, CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_52378a74ae3724bcab44036645b" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_52378a74ae3724bcab44036645b"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "post"`);
    }

}
