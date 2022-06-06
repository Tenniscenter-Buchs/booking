import { Entity, Column } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';

@Entity('addresses')
export class Address extends AbstractEntity{
    @Column()
    streetName: string;

    @Column()
    houseNumber: number;

    @Column()
    postalCode: number;

    @Column()
    city: string;

    @Column()
    province: string;

    @Column()
    country: string;
}
