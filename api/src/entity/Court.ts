import { Entity, Column } from 'typeorm'
import { AbstractEntity } from './AbstractEntity';

@Entity('courts')
export class Court extends AbstractEntity {
    @Column()
    description: string;
}
