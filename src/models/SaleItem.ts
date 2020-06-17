import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { Sale } from "./Sale";

@Entity()
export class SaleItem {
    @PrimaryGeneratedColumn()
    SaleItemId!: number;
    @Column()
    Quantity!: number;

    @ManyToOne(type => Sale, s => s.saleItems)
    sale!: Sale;

    @ManyToOne(type => Product, p => p.saleItems)
    product!: Product;
}
