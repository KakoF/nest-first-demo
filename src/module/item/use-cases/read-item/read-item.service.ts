import { Inject, Injectable } from '@nestjs/common';
import { Item } from '../../../../domain/entities/item.entity';
import { Repository } from 'typeorm';
import { ItemCreateDto } from '../../dtos/itemCreate.dto';
import { IReadItemService } from './interface/read-item.interface';
@Injectable()
export class ReadItemService implements IReadItemService {
    constructor(
        @Inject('ITENS_REPOSITORY')
        private _repository: Repository<Item>,
    ) { }

    public async findAll(): Promise<ItemCreateDto[]> {
        return await this._repository.find();
    }
}
