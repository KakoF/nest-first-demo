// item.module.ts

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../src/database/database.module';
import { userProviders } from './user.provider';
import { GetUserService } from './use-cases/get-user/get-user.service';
import { GetUserController } from './use-cases/get-user/get-user.controller';
import { GET_USER } from './use-cases/get-user/interface/get-user.interface';

@Module({
    imports: [DatabaseModule],
    providers: [...userProviders, { useClass: GetUserService, provide: GET_USER }],
    exports: [UsersModule, { useClass: GetUserService, provide: GET_USER }],
    controllers: [GetUserController]
})
export class UsersModule { }