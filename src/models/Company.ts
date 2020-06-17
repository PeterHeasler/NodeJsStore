import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Sale } from "./Sale";
import { Customer } from "./Customer";
import { Product } from "./Product";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;

    @OneToMany(type => Product, p => p.company) 
    products!: Product[];
    @OneToMany(type => Customer, c => c.company) 
    customers!: Customer[];
    @OneToMany(type => Sale, s => s.company) 
    sales!: Sale[];
}
