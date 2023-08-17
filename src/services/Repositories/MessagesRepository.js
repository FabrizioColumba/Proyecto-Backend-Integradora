export default class MessagesRepository{
    constructor(dao){
         this.dao = dao;
    }
    getMessages =  () =>{
        return this.dao.getMessages(params);
    }
    
    createMessages =  (messages) =>{
        return this.dao.createMessages(messages);
    }
    
}