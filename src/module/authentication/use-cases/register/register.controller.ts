import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from '../../../authentication/dtos/register.dto';
import { RegisterResponseDto } from '../../dtos/register-response.dto';
import { RegisterService } from './register.service';

@Controller('api/register')
export class RegisterController {
    private readonly _service: RegisterService

    public constructor(service: RegisterService) {
        this._service = service
    }
    @Post()
    public async register(@Body() body: RegisterDto): Promise<RegisterResponseDto> {
        const user = await this._service.register(body)
        return user
    }
}
