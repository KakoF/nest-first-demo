import { IsEmail, IsUUID, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthenticationResponseDto implements Readonly<AuthenticationResponseDto> {
  @IsUUID()
  id: string;

  role: string;

  @ApiProperty({ description: 'Password' })
  @IsEmail()
  email: string;

  public static from(dto: Partial<AuthenticationResponseDto>) {
    const it = new AuthenticationResponseDto();
    it.email = dto.email;
    it.id = dto.id;
    it.role = dto.role;
    return it;
  }

  public static fromEntity(entity: AuthenticationResponseDto) {
    return this.from({
      id: entity.id,
      role: entity.role,
      email: entity.email,
    });
  }
}