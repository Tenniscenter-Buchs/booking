import { Entity, PrimaryGeneratedColumn, Column, JoinColumn , ManyToOne } from 'typeorm';
import { Address } from './Address';

export enum UserRole {
    ADMIN = 'admin',
        END_USER = 'end_user'
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column({default: false})
    signupComplete: boolean;

    @Column({default: false})
    emailVerified: boolean;

    @Column({
        unique: true
    })
    supertokensId: string;

    @ManyToOne(() => Address)
    @JoinColumn()
    residenceAddress: Address;

    @ManyToOne(() => Address)
    @JoinColumn()
    billingAddress: Address;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.END_USER
    })
    role: UserRole;
}
