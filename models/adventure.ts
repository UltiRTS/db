import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { User } from "./user";

@Entity()
export class Adventure {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    config: string

    @Column('datetime', {default: () => "CURRENT_TIMESTAMP"})
    createAt: Date
}