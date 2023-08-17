import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import { companiesServices } from '../services/repositories.js';
import config from '../config/config.js';

const home = async(req,res)=>{
    try{
        const user = req.user;
        if(!user) return res.redirect('/login');
        switch(user.role){
            case "user":
                return res.render('userHome',{user})
            case "admin":
                console.log(user);
                const company = await companiesServices.getBy({users:new mongoose.Types.ObjectId(user.id)})
                console.log(company);
                return res.render('company',{company})
            case "superadmin":
                const companies = await companiesServices.get();
                return res.render('companies',{companies})
        }
        
    }catch(error){
        console.log(error);
    }
}

const chat = async(req,res)=>{
    res.render('companyChat');
}

const register = async(req,res)=>{
    res.render('register');
}
const login = async(req,res)=>{
    res.render('login');
}

const restoreRequest = (req,res)=>{
    res.render('restoreRequest')
}

const restorePassword = (req,res) =>{
    const {token} = req.query;
    try{
        const validToken = jwt.verify(token,config.jwt.SECRET)
        res.render('restorePassword') 
    }catch(error){
        return res.render('invalidToken')
    }   
}
export default {
    chat,
    home,
    login,
    register,
    restoreRequest,
    restorePassword
}