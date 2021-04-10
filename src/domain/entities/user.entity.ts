// item.entity.ts
import { IsEmail } from 'class-validator';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

//@Entity({ name: 'item' })
@Entity('users')
export class User extends BaseEntity {

    @Column({ type: 'varchar', length: 100 })
    @IsEmail()
    email: string;

    @Column({ type: 'varchar', length: 100 })
    role: string;

    @Column({ type: 'varchar', length: 300 })
    password: string;

}