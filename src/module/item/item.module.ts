// item.module.ts

import { Module } from '@nestjs/common';
import { itemProviders } from './item.provider';
import { DatabaseModule } from '../../../src/database/database.module';
import { CreateItemService } from './use-cases/create-item/create-item.service';
import { CreateItemController } from './use-cases/create-item/create-item.controller';
import { ReadItemController } from './use-cases/read-item/read-item.controller';
import { ReadItemService } from './use-cases/read-item/read-item.service';
import { READ_ITEM } from './use-cases/read-item/interface/read-item.interface';
import { CREATE_ITEM } from './use-cases/create-item/interface/create-item.interface';

@Module({
    imports: [DatabaseModule],
    providers: [{ useClass: ReadItemService, provide: READ_ITEM }, ...itemProviders, { useClass: CreateItemService, provide: CREATE_ITEM }],
    controllers: [CreateItemController, ReadItemController],
    exports: []
})
export class ItemModule { }