export default class UserRepository{
    constructor(dao){
         this.dao = dao;
    }

    get =  () =>{
        return this.dao.getUser(params);
    }
    getBy =  (params) =>{
       return this.dao.getUserBy(params); 
    }
    create =  (user) =>{
        return this.dao.createUser(user);
    }
    update =  (id,user) =>{
        return this.dao.updateUser(id,user)
    }
    delete =  (id) =>{
        return this.dao.deleteUser(id);
    }
}