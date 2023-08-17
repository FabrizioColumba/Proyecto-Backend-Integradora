import messageModel from "../models/messages.js";

export default class MessagesDao {
    getMessages = (params) =>{
        return messageModel.find(params).lean();
    }
    createMessages = (messages) =>{
        return messageModel.create(messages);
    }
}