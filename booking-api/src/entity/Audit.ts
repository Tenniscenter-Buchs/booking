import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';
import { User } from './User';

export enum AuditEntryEvent {
    USER_SIGNUP_INIT = 'user_signup_init',
        USER_SIGNUP_COMPLETE = 'user_signup_complete',
        USER_SIGNUP_FAILED = 'user_signup_failed',
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
export class AuditEntry extends AbstractEntity {
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
        default: AuditEntryLevel.INFO
    })
    level?: AuditEntryLevel;

    @Column()
    detail?: string;
}
