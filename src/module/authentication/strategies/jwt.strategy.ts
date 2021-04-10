
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserGetDto } from '../../users/dtos/userGet.dto'
import { IGetUserService } from '../../users/use-cases/get-user/interface/get-user.interface'

export interface AccessTokenPayload {
    sub: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    private _service: IGetUserService

    public constructor(service: IGetUserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET,
            signOptions: {
                expiresIn: process.env.TOKEN_TIME,
            },
        })
        this._service = service
    }

    async validate(payload: AccessTokenPayload): Promise<UserGetDto> {
        const { sub: id } = payload
        const user = await this._service.get(id)

        if (!user) {
            return null
        }

        return user
    }
}