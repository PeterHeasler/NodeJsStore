import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getConnectionManager, Repository } from "typeorm";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";
import { Product } from "../models/Product";

//https://github.com/typestack/routing-controllers

@JsonController()
export class ProductController {

   private _repo: Repository<Product>;

   constructor() {
      this._repo = getConnectionManager().get().getRepository(Product);
   }

   //could make the route companies/:cid/products but would perfer the companyId to come from the JWT in the header...
   @Get("/products")
   getAll() {
      return this._repo.find();
   }

   @Get("/products/:id")
   getOne(@EntityFromParam("id") product: Product) {
      return product;
   }

   @Post("/products")
   post(@EntityFromBody({ required: true }) product: Product) {
      return this._repo.save(product);
   }

   @Put("/products/:id")
   put(@Param("id") id: number, @Body({ required: true }) product: Product) {
      return this._repo.save(product);
   }

   @Delete("/products/:id")
   remove(@Param("id") id: number) {
      return this._repo.delete(id); //this._repo.softDelete(id);
   }
}