
import { User } from '../../domain/entities/user.entity';
import { Connection } from 'typeorm';

export const userProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DATABASE_CONNECTION'],
    },
];