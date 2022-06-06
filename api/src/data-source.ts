import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Court } from './entity/Court';
import { CourtReservation } from './entity/CourtReservation';
import { CourtReservationSlot } from './entity/CourtReservationSlot';
import { User } from './entity/User';
import { Address } from './entity/Address';
import { AuditEntry, AuditEntryLevel } from './entity/Audit';

export const dataSource = new DataSource({
    'type': 'postgres',
    'url': process.env.DATABASE_URL,
    'synchronize': true,
    'logging': true,
    'entities': [
        User,
        Court,
        CourtReservationSlot,
        CourtReservation,
        Address,
        AuditEntry
    ],
    'migrations': [
        'migration/**/*.ts'
    ]
});

export const audit = (entry: AuditEntry) => {
    console.log(`AUDIT [${entry.level}] [${entry.user}] [${entry.type}]: ${entry.detail}`);
    dataSource.getRepository(AuditEntry).create(entry);
};

export const verbose = (entry: AuditEntry) => {
    audit({...entry, level: AuditEntryLevel.VERBOSE});
};

export const debug = (entry: AuditEntry) => {
    audit({...entry, level: AuditEntryLevel.DEBUG});
};

export const info = (entry: AuditEntry) => {
    audit({...entry, level: AuditEntryLevel.INFO});
};

export const warn = (entry: AuditEntry) => {
    audit({...entry, level: AuditEntryLevel.WARNING});
};

export const error = (entry: AuditEntry) => {
    audit({...entry, level: AuditEntryLevel.ERROR});
};

export const fatal = (entry: AuditEntry) => {
    audit({...entry, level: AuditEntryLevel.FATAL});
};
