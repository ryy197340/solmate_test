import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Double } from "typeorm";
import { StatusType, TransactionType } from "../models/types";

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    chain_id: number;

    @Column({
        unique: true
    })
    tx_hash: string;

    @Column()
    from: string;

    @Column()
    token_address: string;

    @Column({
        type: 'double',
    })
    token_amount: number;

    @Column({
        type: 'double',
    })
    amount: number;

    @Column({
        default: StatusType.Pending
    })
    status: number;

    @CreateDateColumn()
    create_date: Date
}