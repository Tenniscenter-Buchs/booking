import { Court } from './Court';

export class CourtReservationSlot {
    id: number = 0;
    court: Court = new Court();
    startTime: string = '';
    endTime: string = '';
}
