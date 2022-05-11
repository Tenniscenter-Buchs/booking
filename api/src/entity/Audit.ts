import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from 'typeorm';
import { User } from './User';

export enum AuditEntryEvent {
    USER_SIGNUP = 'user_signup',
        USER_INCONSISTENT_SIGNUP = 'user_inconsistent_signup',
        USER_EMAIL_VERIFIED = 'user_email_verified'
}

export enum AuditEntryLevel {
    VERBOSE = 'verbose',
        DEBUG = 'debug',
        INFO = 'info',
        WARNING = 'warning',
        ERROR = 'error',
        FATAL = 'fatal'
}

@Entity('audit_log')
export class AuditEntry {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => User)
    user: User;

    @Column({
        type: 'enum',
        enum: AuditEntryEvent,
    })
    type: AuditEntryEvent;

    @Column({
        type: 'enum',
        enum: AuditEntryLevel,
    })
    level: AuditEntryLevel;

    @Column()
    detail?: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    time?: Timestamp;
}
