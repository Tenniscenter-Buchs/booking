import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

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
