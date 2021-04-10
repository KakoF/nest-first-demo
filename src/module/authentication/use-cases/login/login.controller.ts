import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthenticationResponseDto } from '../../dtos/authentication-response.dto';
import { AuthenticationDto } from '../../dtos/authentication.dto';
import { TokensService } from '../../service/tokens.service';
import { LoginService } from './login.service';

export interface AuthenticationPayload {
    user: AuthenticationResponseDto
    payload: {
        type: string
        token: string
        role: string
    }
}
@Controller('api/login')
export class LoginController {
    private readonly _service: LoginService
    private readonly tokens: TokensService

    public constructor(service: LoginService, tokens: TokensService) {
        this._service = service
        this.tokens = tokens
    }

    @Post()
    public async login(@Body() body: AuthenticationDto) {
        try {
            const user = await this._service.auth(body)
            const token = await this.tokens.generateAccessToken(user)
            const payload = this.buildResponsePayload(user, token)
            return {
                status: 'success',
                data: payload,
            }
        } catch (error) {
            throw new HttpException(error.message, 400)
        }
    }
    private buildResponsePayload(user: AuthenticationResponseDto, accessToken: string): AuthenticationPayload {
        return {
            user: user,
            payload: {
                type: 'bearer',
                token: accessToken,
                role: user.role
            }
        }
    }

}
