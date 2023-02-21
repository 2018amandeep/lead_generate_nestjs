import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('leads')
export class Leads extends BaseEntity{
    @PrimaryGeneratedColumn()
    lead: number

    @Column({type: 'varchar'})
    full_name: string

    @Column({type: 'varchar'})
    email: string

    @Column({type: 'bigint'})
    mobile: number;

    @Column({type: 'varchar'})
    city: string

    @Column({type: 'varchar'})
    source: string
    
    @Column({type: 'varchar'})
    status: string

    @Column({type: 'varchar'})
    call_status: string

    @Column({type: 'bigint', unsigned: true, nullable:true})
    creation_time?: number;

    @Column({type: 'bigint', unsigned: true, nullable:true})
    updation_time?: number;
}