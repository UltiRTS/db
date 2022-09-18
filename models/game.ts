import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    game_config: string

    @Column()
    team_win: number

    @Column('datetime', {default: new Date()})
    start_time: Date

    @Column('datetime', {default: new Date()})
    end_time: Date
}