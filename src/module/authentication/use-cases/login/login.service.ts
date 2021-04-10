import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { AuthenticationDto } from '../../dtos/authentication.dto';
import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';
import { AuthenticationResponseDto } from '../../dtos/authentication-response.dto';

@Injectable()
export class LoginService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private _repository: Repository<User>,
    ) { }

    public async auth(request: AuthenticationDto): Promise<AuthenticationResponseDto> {
        const { email, password } = request
        const user = await this._repository.findOne({ where: { email: email } });
        console.log(user.password)
        console.log(password)
        if (user) {
            const isValid = await compare(password, user.password)
            console.log(isValid)
            if (isValid)
                return AuthenticationResponseDto.fromEntity(user);
        }
        throw new Error('Usuário Inválido')

    }
}
