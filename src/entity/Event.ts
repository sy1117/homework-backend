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

    @BeforeInsert()
    @BeforeUpdate()
    updateDate(){
        let _date = new Date();
        this.year = _date.getFullYear();
        this.month = _date.getMonth();
        this.date = _date.getDate();
    }

    @CreateDateColumn() createdAt: string;
}
