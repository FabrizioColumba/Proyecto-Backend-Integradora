import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        enum:["ADMIN","USER","PREMIUM"],
        default:"user"
    },
})

const userModel = mongoose.model(collection, schema);

export default userModel;