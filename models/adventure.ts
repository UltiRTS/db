import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinTable} from "typeorm";
import { User } from "./user";

@Entity()
export class Adventure {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    config: string

    @Column('datetime', {default: () => "CURRENT_TIMESTAMP"})
    createAt: Date

    @Column('boolean', {default: false})
    closed: boolean

    @ManyToMany(() => User)
    @JoinTable()
    members: User[]
}