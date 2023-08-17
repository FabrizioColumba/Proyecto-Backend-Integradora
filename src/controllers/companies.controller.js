import { companiesServices } from "../services/repositories.js";

const getCompanies = async (req, res) => {
    const companies = await companiesServices.getCompanies();
    res.send({status: "succes", payload: companies})
}

const createCompany = async (req, res) => {
    const {name,legal_name,plan,industry,address} = req.body;
    if(!name || !legal_name || !industry || !address) return res.status(400).send({status: "error",error:"Incomplete values"});
    const company = {
        name,
        legal_name,
        plan,
        industry,
        address
    }
    const result = await companiesServices.createCompany(company);
    res.sendStatus(201)
}

const  getCompanyBy = async (req, res) => {
    const {cid} = req.params;
    const user = req.user;
    const company = await companiesServices.getCompanyBy({_id: cid})
    //hago una busqueda corroborando si la compañia tiene a dicho usuraio dentro del arreglo de empleados, si si lo tine entonces si muestraesa info 
    if(!company) return res.status(404).send({status: "error",error:"Company not found"});
    res.send({status: "succes", payload: company})
}


const updateCompany = async (req, res) => {
    const {cid} = req.params;
    const updateCompany = req.body;
    const result  = await companiesServices.updateCompany(cid,updateCompany);
    res.sendStatus(201);
}

const deleteCompany = async (req,res)=>{
    const {cid} = req.params;
    await companiesServices.deleteCompany(cid);
    res.sendStatus(201);
}

export default {
    deleteCompany,
    updateCompany,
    getCompanies,
    getCompanyBy,
    createCompany
}