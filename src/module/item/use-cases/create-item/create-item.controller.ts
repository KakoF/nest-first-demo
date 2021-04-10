import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from '../../../authentication/guards/role.guard';
import { JWTGuard } from '../../../authentication/guards/jwt.guard';
import { ItemCreateDto } from '../../dtos/itemCreate.dto';
import { CREATE_ITEM, ICreateItemService } from './interface/create-item.interface';

@Controller('api/item')
export class CreateItemController {

    constructor(
        @Inject(CREATE_ITEM)
        private readonly _service: ICreateItemService
    ) { }
    @Post()
    @UseGuards(JWTGuard, AdminGuard)
    public async create(@Body() dto: ItemCreateDto): Promise<ItemCreateDto> {
        return await this._service.create(dto);
    }
}
