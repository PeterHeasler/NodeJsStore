import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getConnectionManager, Repository } from "typeorm";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";
import { Customer } from "../models/Customer";

//https://github.com/typestack/routing-controllers

@JsonController()
export class CustomerController {

   private _repo: Repository<Customer>;

   constructor() {
      this._repo = getConnectionManager().get().getRepository(Customer);
   }

   //could make the route companies/:cid/customers but would perfer the companyId to come from the JWT in the header...
   @Get("/customers") 
   getAll() {
      return this._repo.find();
   }

   @Get("/customers/:id")
   getOne(@EntityFromParam("id") customer: Customer) {
      return customer;
   }

   @Post("/customers")
   post(@EntityFromBody({ required: true }) customer: Customer) {
      return this._repo.save(customer);
   }

   @Put("/customers/:id")
   put(@Param("id") id: number, @Body({ required: true }) customer: Customer) {
      return this._repo.save(customer);
   }

   @Delete("/customers/:id")
   remove(@Param("id") id: number) {
      return this._repo.delete(id); //this._repo.softDelete(id);
   }
}