import "reflect-metadata"; // this shim is required
import { createExpressServer} from "routing-controllers";
import { createConnection } from "typeorm";

import { CompanyController } from "./controllers/CompanyController";
import { CustomerController } from "./controllers/CustomerController";
import { ProductController } from "./controllers/ProductController";
import { SaleController } from "./controllers/SaleController";
import { SaleItemController } from "./controllers/SaleItemController";
//import Sequelize from 'sequelize'; // doesn't play well with typescript, requires too much boiler plate

createConnection().then(async connection => {
    const app = createExpressServer({
        //authorizationChecker: ...https://github.com/typestack/routing-controllers#using-authorization-features
        routePrefix: "/api",
        controllers: [ // add using DI https://github.com/typestack/routing-controllers#using-di-container 
            CustomerController,
            CompanyController, 
            ProductController, 
            SaleController, 
            SaleItemController]
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`API listening at http://localhost:${port}`))
}).catch(error => console.log("TypeORM connection error: ", error));

// // todos:
// // * Separate DTOs from Models, don't expose model objects directly
// // * Get and Validate JWT from Header
// // * Get customerId from JWT, expose via CustomerIdProvider
// // * database connection: auto insert customerId from CustomerProvider to every query
// // * Swagger
// // * /health endpoint
// // * unit tests: object validation logic, JWT validation, eventPublished, etc.
// // * custom exceptions
// // * logging framework : log all API requests
// // * publish event for every create/update/delete API call
