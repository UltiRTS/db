import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { User } from "./user";

@Entity()
export class Adventure {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: 'text'})
    config: string

    @Column('datetime', {default: () => "CURRENT_TIMESTAMP"})
    createAt: Date
}