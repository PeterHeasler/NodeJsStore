import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { SaleItem } from "./SaleItem";
import { Company } from "./Company";
import { Customer } from "./Customer";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    SaleId!: number; //Guid probably isn't recommended due to expected number of sales


    @OneToMany(type => SaleItem, si => si.sale)
    saleItems!: SaleItem[];


    @ManyToOne(type => Company, c => c.sales)
    company!: Company;
    @ManyToOne(type => Customer, c => c.sales)
    customer!: Customer;
}
