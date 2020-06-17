// After switching to https://github.com/typeorm/typeorm these are no longer required
interface Company {
    id: number; //Should be a GUID
    name: string;
  
    // todo validation: https://www.npmjs.com/package/validate-typescript || joi?
    // should have name
  }
  
  interface Product {
    ProductId: number; //probably should be a GUID;
    CompanyId: number;
    Name: string;
  
    // todo validation: https://www.npmjs.com/package/validate-typescript || joi?
    // should have (companyId, name)
  }
  
  interface Customer {
    CustomerId: number;
    CompanyId: number;
    Name: string;
    
    // todo validation: https://www.npmjs.com/package/validate-typescript || joi?
    // should have (companyId, name)
  }
  
  interface Sale {
    SaleId: number; //Guid probably isn't recommended due to expected number of sales
    CompanyId: number;
    CustomerId: number; //Allow annoymous sales?
    Items: SaleItem[];
  
    // todo validation: https://www.npmjs.com/package/validate-typescript || joi?
    // validation rules (companyId, at lease 1 saleitem, CompanyId must be the same for the product and customer)
  }
  
  interface SaleItem {
    ProductId: number;
    Quantity: number;
  }