import BaseRouter from "./BaseRouter.js";
import companiesController from "../controllers/companies.controller.js";

export default class CompaniesRouter extends BaseRouter {
    
    init(){
      
        this.get('/',['SUPERADMIN'],companiesController.getCompanies);
      
      this.post('/',['SUPERDAMIN','ADMIN'],companiesController.createCompany);
      
      this.get('/:cid',['SUPERADMIN','ADMIN','USER'],companiesController.getCompanyBy);
      
      this.put('/:cid', ['ADMIN'], companiesController.updateCompany);
      
      this.delete('/:cid', ['SUPERADMIN'], companiesController.deleteCompany);
    }
  }

