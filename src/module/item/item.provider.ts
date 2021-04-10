
import { Connection } from 'typeorm';
import { Item } from '../../domain/entities/item.entity';

export const itemProviders = [
    {
        provide: 'ITENS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Item),
        inject: ['DATABASE_CONNECTION'],
    },
];