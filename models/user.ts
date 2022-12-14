import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne} from "typeorm"
import { Confirmation } from "./confirmation"
import { Chat } from "./chat"
import * as crypto from 'crypto'
import { Adventure } from "./adventure"
// import c from "crypto"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {unique: true})
    username: string

    @Column()
    hash: string

    @Column()
    salt: string

    @Column('int', {default: 0})
    accessLevel: number

    @Column('int', {default: 0})
    exp: number

    @Column('int', {default: 0})
    sanity: number

    @Column('boolean', {default: false})
    blocked: boolean

    @Column('int', {default: 0})
    winCount: number

    @Column('int', {default: 0})
    loseCount: number

    @OneToMany(() => Confirmation, (confirmation) => confirmation.user)
    confirmations: Confirmation[]

    @OneToMany(() => Chat, (chat) => chat.author)
    chats: Chat[]

    @ManyToMany(() => Adventure)
    @JoinTable()
    adventures: Adventure[]

    @ManyToMany(() => User, (user) => user.id)
    @JoinTable()
    friends: User[]

    @OneToMany(() => Mark, (mark) => mark.user)
    marks: Mark[]

    @OneToMany(() => Mark, (mark) => mark.target)
    reverseMarks: Mark[]

    static saltNhash(password: string) {
        const salt = crypto.randomBytes(16).toString('hex'); 
    
        // Hashing user's salt and password with 1000 iterations, 
        
        const hash = crypto.pbkdf2Sync(password, salt,  
        1000, 64, `sha512`).toString(`hex`); 

        return {
            salt, hash
        }
    }

    verify(password: string) {
        var hash = crypto.pbkdf2Sync(password,  
            this.salt, 1000, 64, `sha512`).toString(`hex`); 
            return this.hash === hash; 
    }
}

@Entity()
export class Mark {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    mark: string

    @ManyToOne(() => User, (user) => user.marks)
    user: User

    @ManyToOne(() => User, (user) => user.reverseMarks)
    target: User
}