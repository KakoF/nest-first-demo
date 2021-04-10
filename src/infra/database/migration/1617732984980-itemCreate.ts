import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class itemCreate1617732984980 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: 'items',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'createAt',
                        type: 'timestamp',
                        default: "timezone('utc'::text, now())",
                    },
                    {
                        name: 'updateAt',
                        type: 'timestamp',
                        isNullable: true
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('itens')
        //await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }
}
