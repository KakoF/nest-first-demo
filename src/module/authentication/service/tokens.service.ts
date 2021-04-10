import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { SignOptions } from 'jsonwebtoken'
import { AuthenticationResponseDto } from '../dtos/authentication-response.dto'


const BASE_OPTIONS: SignOptions = {
    issuer: 'https://my-app.com',
    audience: 'https://my-app.com',
}

export interface RefreshTokenPayload {
    jti: number;
    sub: number
}

@Injectable()
export class TokensService {
    private readonly jwt: JwtService

    public constructor(jwt: JwtService) {
        this.jwt = jwt
    }

    public async generateAccessToken(user: AuthenticationResponseDto): Promise<string> {
        const opts: SignOptions = {
            ...BASE_OPTIONS,
            subject: String(user.id),
        }

        return this.jwt.signAsync({}, opts)
    }


}