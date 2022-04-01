import "reflect-metadata"
import { DataSource } from "typeorm"
import { Court } from "./entity/Court";
import { CourtReservation } from "./entity/CourtReservation";
import { CourtReservationSlot } from "./entity/CourtReservationSlot";
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "synchronize": true,
    "logging": true,
    "entities": [
        User,
        Court,
        CourtReservationSlot,
        CourtReservation
    ],
    "migrations": [
        "migration/**/*.ts"
    ]
});
