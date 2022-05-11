import { Entity, ManyToOne, Column, Timestamp, JoinColumn } from 'typeorm'
import { AbstractEntity } from './AbstractEntity';
import { Court } from './Court';

@Entity('court_reservation_slots')
export class CourtReservationSlot extends AbstractEntity{
    @ManyToOne(() => Court, { nullable: false })
    @JoinColumn()
    court: Court;

    @Column({type: 'time'})
    startTime: Timestamp;

    @Column({type: 'time'})
    endTime: Timestamp;

}
