import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    game_config: string

    @Column()
    team_win: number
}