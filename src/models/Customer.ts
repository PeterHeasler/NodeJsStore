import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Sale } from "./Sale";
import { Company } from "./Company";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    CustomerId!: number;
    @Column()
    Name!: string;


    @OneToMany(type => Sale, s => s.customer)
    sales!: Sale[];
    @ManyToOne(type => Company, c => c.customers)
    company!: Company;
}
