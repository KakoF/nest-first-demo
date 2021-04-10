import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: process.env.BASE_HOST,
            port: Number.parseInt(process.env.BASE_PORT),
            username: process.env.BASE_USER,
            password: process.env.BASE_PASSWORD,
            database: process.env.BASE_DATABASE,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: process.env.RUN_MIGRATIONS ? true : false,
        }),
    },
];