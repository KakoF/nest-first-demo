import { IsString, IsUUID, } from 'class-validator';
import { Item } from '../../../domain/entities/item.entity';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid'
import { User } from '../../../domain/entities/user.entity';

export class UserGetDto implements Readonly<UserGetDto> {
  id: string;
  email: string;
  role: string;

  public static from(dto: Partial<UserGetDto>) {
    const it = new UserGetDto();
    it.id = dto.id
    it.email = dto.email;
    it.role = dto.role;
    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      email: entity.email,
      role: entity.role
    });
  }

}