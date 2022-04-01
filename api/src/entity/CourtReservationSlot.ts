import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, Timestamp, JoinColumn } from "typeorm"
import { Court } from "./Court";

@Entity("court_reservation_slots")
export class CourtReservationSlot {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Court)
    @JoinColumn()
    court: Court;

    @Column({type: 'time'})
    startTime: Timestamp;

    @Column({type: 'time'})
    endTime: Timestamp;

}
