export default class UserRepository{
    constructor(dao){
         this.dao = dao;
    }

    getUser =  () =>{
        return this.dao.getUser(params);
    }
    getUserBy =  (params) =>{
       return this.dao.getUserBy(params); 
    }
    createUser =  (user) =>{
        return this.dao.createUser(user);
    }
    updateUser =  (id,user) =>{
        return this.dao.updateUser(id,user)
    }
    deleteUser =  (id) =>{
        return this.dao.deleteUser(id);
    }
}