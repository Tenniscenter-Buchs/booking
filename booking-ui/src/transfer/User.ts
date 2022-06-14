import { Address } from './Address';

export enum UserRole {
    ADMIN = 'admin',
        END_USER = 'end_user'
}

export class User {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    signupComplete: boolean = false;
    emailVerified: boolean = false;
    supertokensId: string = '';
    residenceAddress: Address = new Address();
    billingAddress: Address = new Address();
    role: UserRole = UserRole.END_USER;
}
