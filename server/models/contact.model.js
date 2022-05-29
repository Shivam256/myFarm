import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'USER'
    },
    reason:{
        type:String,
    }
})


const Contact = mongoose.model("CONTACT",ContactSchema);

export default Contact;