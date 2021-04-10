import { IsEmail, IsUUID, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../domain/entities/user.entity';
import { v4 as uuidv4 } from 'uuid'
import { hashSync } from "bcryptjs";

export class RegisterDto implements Readonly<RegisterDto> {
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Email' })
  @IsEmail()
  email: string;

  role: string;

  @ApiProperty({ description: 'Password' })
  password: string;

  public static from(dto: Partial<RegisterDto>) {
    const it = new RegisterDto();
    it.id = uuidv4();
    it.role = "Guest"
    it.email = dto.email;
    it.password = hashSync(dto.password, 12)
    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      email: entity.email,
      password: entity.password,
    });
    //const { password, ...userWithourPassword } = user
    //return Object.assign({}, userWithourPassword)
  }

}