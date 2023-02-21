import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('leads_comments')
export class LeadsComments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'int'})
    lead_id: number

    @Column({type: 'varchar'})
    comment: string

    @Column({type: 'bigint', unsigned: true, nullable:true})
    creation_time?: number;

    @Column({type: 'bigint', unsigned: true, nullable:true})
    updation_time?: number;
}