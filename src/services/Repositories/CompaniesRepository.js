export default class CompaniesRepository{
    constructor(dao){
         this.dao = dao;
    }

    getCompanies =  (params) =>{
        return this.dao.getCompanies(params);
    }
    getCompanyBy =  (params) =>{
       return this.dao.getCompanyBy(params); 
    }
    createCompany =  (company) =>{
        return this.dao.createCompany(company);
    }
    updateCompany =  (id,company) =>{
        return this.dao.updateCompany(id,company)
    }
    deleteCompany =  (id) =>{
        return this.dao.deleteCompany(id);
    }
}