import { Module } from '@nestjs/common';
import { ItemModule } from './module/item/item.module';
import { UsersModule } from './module/users/users.module';
import { AuthenticationModule } from './module/authentication/authentication.module';

@Module({
  //imports: [ItemModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  imports: [ItemModule, UsersModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
