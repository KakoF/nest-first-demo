import { ItemCreateDto } from "../../../../../module/item/dtos/itemCreate.dto";
export const CREATE_ITEM = 'CREATE ITEM';
export interface ICreateItemService {
    create(dto: ItemCreateDto): Promise<ItemCreateDto>
}
