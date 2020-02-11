import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, BeforeUpdate, AfterInsert, AfterUpdate, BaseEntity, Generated} from "typeorm";

@Entity()
export class Event extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"text"})
    title: string;

    @Column({type:"datetime"})
    datetime : Date;

    @Column({type:"int", nullable:true})
    year:number;

    @Column({type:"int", nullable:true})
    month:number;

    @Column({type:"int", nullable:true})
    date:number;

    @Column({type:"int", nullable:true})
    hours:number;

    @CreateDateColumn() createdAt: string;
}
