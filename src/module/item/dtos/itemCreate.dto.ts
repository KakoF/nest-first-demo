import { IsString, IsUUID, } from 'class-validator';
import { Item } from '../../../domain/entities/item.entity';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid'

export class ItemCreateDto implements Readonly<ItemCreateDto> {
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome do item' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrição do item' })
  @IsString()
  description: string;

  public static from(dto: Partial<ItemCreateDto>) {
    const it = new ItemCreateDto();
    it.id = uuidv4();
    it.name = dto.name;
    it.description = dto.description;
    return it;
  }

  public static fromEntity(entity: Item) {
    return this.from({
      id: entity.id,
      name: entity.name,
      description: entity.description
    });
  }

}