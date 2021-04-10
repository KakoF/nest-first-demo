import { Controller, Get, Inject } from '@nestjs/common';
import { ItemCreateDto } from '../../dtos/itemCreate.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { READ_ITEM, IReadItemService } from './interface/read-item.interface';

@Controller('api/item')
export class ReadItemController {

    constructor(
        @Inject(READ_ITEM)
        private readonly _service: IReadItemService
    ) { }


    @Get()
    public async get(): Promise<ItemCreateDto[]> {
        return await this._service.findAll();
    }
}
