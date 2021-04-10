import { IsEmail, IsUUID, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../domain/entities/user.entity';
import { v4 as uuidv4 } from 'uuid'

export class RegisterResponseDto implements Readonly<RegisterResponseDto> {
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Email' })
  @IsEmail()
  email: string;

  role: string;

  public static from(dto: Partial<RegisterResponseDto>) {
    const it = new RegisterResponseDto();
    it.id = uuidv4();
    it.role = "Guest"
    it.email = dto.email;
    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      email: entity.email,
    });
    //const { password, ...userWithourPassword } = user
    //return Object.assign({}, userWithourPassword)
  }

}