import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("courts")
export class Court {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

}
