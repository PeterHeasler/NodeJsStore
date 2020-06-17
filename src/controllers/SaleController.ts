import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getConnectionManager, Repository } from "typeorm";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";
import { Sale } from "../models/Sale";

//https://github.com/typestack/routing-controllers

@JsonController()
export class SaleController {

   private _repo: Repository<Sale>;

   constructor() {
      this._repo = getConnectionManager().get().getRepository(Sale);
   }

   //could make the route companies/:cid/sales but would perfer the companyId to come from the JWT in the header...
   @Get("/sales")
   getAll() {
      return this._repo.find();
   }

   @Get("/sales/:id")
   getOne(@EntityFromParam("id") sale: Sale) {
      return sale;
   }

   @Post("/sales")
   post(@EntityFromBody({ required: true }) sale: Sale) {
      return this._repo.save(sale);
   }

   @Put("/sales/:id")
   put(@Param("id") id: number, @Body({ required: true }) sale: Sale) {
      return this._repo.save(sale);
   }

   @Delete("/sales/:id")
   remove(@Param("id") id: number) {
      return this._repo.delete(id); //this._repo.softDelete(id);
   }
}