import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { SaleItem } from "./SaleItem";
import { Company } from "./Company";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    ProductId!: number; //probably should be a GUID;
    @Column()
    Name!: string;


    @ManyToOne(type => Company, c => c.products)
    company!: Company;


    @OneToMany(type => SaleItem, si => si.product) // note: we will create author property in the Photo class below
    saleItems!: SaleItem[];
}
