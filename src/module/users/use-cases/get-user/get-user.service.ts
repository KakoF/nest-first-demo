import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { Repository } from 'typeorm';
import { UserGetDto } from '../../dtos/userGet.dto';
import { IGetUserService } from './interface/get-user.interface';

@Injectable()
export class GetUserService implements IGetUserService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private _repository: Repository<User>,
    ) { }

    public async get(id: string): Promise<UserGetDto> {
        return await this._repository.findOne({ where: { id: id } }).then(e => UserGetDto.fromEntity(e));
    }
}
