import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Court } from './entity/Court';
import { CourtReservation } from './entity/CourtReservation';
import { CourtReservationSlot } from './entity/CourtReservationSlot';
import { User } from './entity/User';
import { Address } from './entity/Address';
import { AuditEntry, AuditEntryLevel } from './entity/Audit';

let dataSourceConfig: DataSourceOptions = {
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
};

if (process.env.NODE_ENV === 'test') {
    dataSourceConfig = {...dataSourceConfig, 'url': process.env.TEST_DATABASE_URL, dropSchema: true, migrationsRun: true};
}

export const dataSource = new DataSource(dataSourceConfig);

export const initDataSource = async () => {
    try {
        await dataSource.initialize();
    } catch (e) {
        console.error(e);
    }
};

export const closeDataSource = async () => {
    try {
        await dataSource.destroy();
    } catch (e) {
        console.error(e);
    }
};

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
