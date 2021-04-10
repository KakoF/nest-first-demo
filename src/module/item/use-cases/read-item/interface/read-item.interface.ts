import { ItemCreateDto } from "../../../../../module/item/dtos/itemCreate.dto";
export const READ_ITEM = 'READ ITEM';
export interface IReadItemService {
    findAll(): Promise<ItemCreateDto[]>
}
