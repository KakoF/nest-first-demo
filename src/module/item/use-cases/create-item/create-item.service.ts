import { Inject, Injectable } from '@nestjs/common';
import { Item } from '../../../../domain/entities/item.entity';
import { Repository } from 'typeorm';
import { ItemCreateDto } from '../../dtos/itemCreate.dto';
import { ICreateItemService } from './interface/create-item.interface';

@Injectable()
export class CreateItemService implements ICreateItemService {
    constructor(
        @Inject('ITENS_REPOSITORY')
        private _repository: Repository<Item>,
    ) { }

    public async create(dto: ItemCreateDto): Promise<ItemCreateDto> {
        return this._repository.save(ItemCreateDto.from(dto))
            .then(e => ItemCreateDto.fromEntity(e));

    }
}
