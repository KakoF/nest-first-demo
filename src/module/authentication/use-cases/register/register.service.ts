import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { RegisterDto } from '../../../authentication/dtos/register.dto';
import { Repository } from 'typeorm';
import { RegisterResponseDto } from '../../dtos/register-response.dto';

@Injectable()
export class RegisterService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private _repository: Repository<User>,
    ) { }

    public async register(request: RegisterDto): Promise<RegisterResponseDto> {
        return await this._repository.save(RegisterDto.from(request)).then(e => RegisterResponseDto.fromEntity(e));
    }
}
