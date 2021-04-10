import { Controller, Inject, Get, UseGuards, Req } from '@nestjs/common';
import { JWTGuard } from '../../../authentication/guards/jwt.guard';
import { UserGetDto } from '../../dtos/userGet.dto';
import { GET_USER, IGetUserService } from './interface/get-user.interface';

@Controller('api/me')
export class GetUserController implements IGetUserService {

    constructor(
        @Inject(GET_USER)
        private readonly _service: IGetUserService
    ) { }
    @Get()
    @UseGuards(JWTGuard)
    public async get(@Req() req): Promise<UserGetDto> {
        return await this._service.get(req.user.id);
    }
}
