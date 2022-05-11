import { Entity, ManyToOne, JoinColumn } from 'typeorm'
import { AbstractEntity } from './AbstractEntity';
import { CourtReservationSlot } from './CourtReservationSlot';
import { User } from './User';

@Entity('court_reservations')
export class CourtReservation extends AbstractEntity {
    @ManyToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(() => CourtReservationSlot)
    @JoinColumn()
    slot: CourtReservationSlot;
}
