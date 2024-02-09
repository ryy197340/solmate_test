import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Logs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    action: string;

    @Column()
    msg: string;

    @CreateDateColumn()
    create_date: Date
}