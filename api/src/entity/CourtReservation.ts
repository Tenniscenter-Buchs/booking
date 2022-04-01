import { Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { CourtReservationSlot } from "./CourtReservationSlot";
import { User } from "./User";

@Entity("court_reservations")
export class CourtReservation {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(() => CourtReservationSlot)
    @JoinColumn()
    slot: CourtReservationSlot;

}
