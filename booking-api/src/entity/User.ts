import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';
import { Address } from './Address';

export enum UserRole {
    SUPER_USER = 'super_user',
        ADMIN = 'admin',
        END_USER = 'end_user'
}

@Entity('users')
export class User extends AbstractEntity {
    @Column({nullable: true})
    firstName?: string;

    @Column({nullable: true})
    lastName?: string;

    @Column({nullable: true})
    email?: string;

    @Column({default: false})
    signupComplete?: boolean;

    @Column({default: false})
    emailVerified?: boolean;

    @Column({
        unique: true,
        nullable: true
    })
    supertokensId?: string;

    @OneToOne(() => Address)
    @JoinColumn()
    residenceAddress?: Address;

    @OneToOne(() => Address)
    @JoinColumn()
    billingAddress?: Address;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.END_USER
    })
    role?: UserRole;
}
