import { JsonController, Param, Body, Get, Post, Put, Delete, NotFoundError } from "routing-controllers";
import { getConnectionManager, Repository } from "typeorm";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";
import { Company } from "../models/Company";

//https://github.com/typestack/routing-controllers

@JsonController()
export class CompanyController {

   private _repo: Repository<Company>;

   constructor() {
      this._repo = getConnectionManager().get().getRepository(Company);
   }

   @Get("/companies")
   getAll() {
      return this._repo.find();
   }

   @Get("/companies/:id")
   getOne(@EntityFromParam("id") company: Company) {
      return company;
   }

   @Post("/companies")
   post(@EntityFromBody({ required: true }) company: Company) {
      return this._repo.save(company);
   }

   @Put("/companies/:id")
   put(@Param("id") id: number, @Body({ required: true }) company: Company) {
      return this._repo.save(company);
   }

   @Delete("/companies/:id")
   remove(@Param("id") id: number) {
      return this._repo.delete(id); //this._repo.softDelete(id);
   }
}