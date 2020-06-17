import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getConnectionManager, Repository } from "typeorm";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";
import { SaleItem } from "../models/SaleItem";

//https://github.com/typestack/routing-controllers

//could make the route companies/:cid/sales but would perfer the companyId to come from the JWT in the header...
@JsonController("/sales/:sid")
export class SaleItemController {

   private _repo: Repository<SaleItem>;

   constructor() {
      this._repo = getConnectionManager().get().getRepository(SaleItem);
   }

   @Get("/items")
   getAll() {
      return this._repo.find(); //todo filter to company and sale
   }

   @Get("/items/:id")
   getOne(@EntityFromParam("id") saleItem: SaleItem) {
      return saleItem;
   }

   @Post("/items")
   post(@EntityFromBody({ required: true }) saleItem: SaleItem) {
      return this._repo.save(saleItem);
   }

   @Put("/items/:id")
   put(@Param("id") id: number, @Body({ required: true }) saleItem: SaleItem) {
      return this._repo.save(saleItem);
   }

   @Delete("/items/:id")
   remove(@Param("id") id: number) {
      return this._repo.delete(id); //this._repo.softDelete(id);
   }
}