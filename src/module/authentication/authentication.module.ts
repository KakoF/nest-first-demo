import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TokensService } from './service/tokens.service'
import { DatabaseModule } from '../../database/database.module'
import { authenticationProviders } from './authentication.provider'
import { JwtStrategy } from './strategies/jwt.strategy'
import { GetUserService } from '../users/use-cases/get-user/get-user.service'
import { LoginService } from './use-cases/login/login.service';
import { LoginController } from './use-cases/login/login.controller';
import { RegisterController } from './use-cases/register/register.controller';
import { RegisterService } from './use-cases/register/register.service';
import { GET_USER } from '../users/use-cases/get-user/interface/get-user.interface'
import { UsersModule } from '../users/users.module'

@Module({

  imports: [
    DatabaseModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: process.env.TOKEN_TIME,
      }
    }),
  ],
  controllers: [
    LoginController,
    RegisterController,
  ],
  providers: [
    ...authenticationProviders,
    TokensService,
    { useClass: GetUserService, provide: GET_USER },
    LoginService,
    JwtStrategy,
    RegisterService
  ],
})
export class AuthenticationModule { }