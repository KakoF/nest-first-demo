import { IsEmail, IsString, IsUUID, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthenticationDto implements Readonly<AuthenticationDto> {
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Password' })
  @IsString()
  password: string;

  role: string;

  @ApiProperty({ description: 'Email' })
  @IsEmail()
  email: string;


  public static from(dto: Partial<AuthenticationDto>) {
    const it = new AuthenticationDto();
    it.email = dto.email;
    it.id = dto.id;
    it.role = dto.role;
    return it;
  }

  public static fromEntity(entity: AuthenticationDto) {
    return this.from({
      id: entity.id,
      role: entity.role,
      email: entity.email,
    });
  }
}