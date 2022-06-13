import { CourtReservationSlot } from './CourtReservationSlot';
import { User } from './User';

export class CourtReservation {
    id: number = 0;
    user: User = new User();
    slot: CourtReservationSlot = new CourtReservationSlot();
}
