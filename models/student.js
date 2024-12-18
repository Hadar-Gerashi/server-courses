import { Schema ,model} from "mongoose";


const studentSchema=Schema({
userName:String,
password:String,
email:String,
phone:String,
fine:{type:Number,default:0}
})


export const studentModel=model("student",studentSchema)