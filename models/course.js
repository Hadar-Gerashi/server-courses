import {Schema,model} from "mongoose"


const authorSchema=Schema({
    firstName:String,
    lastName:String,
})

export const courseSchema=Schema({
    name:String,
    subjects:[String],
    price:Number,
    openDate:{type:Date,default:new Date()},
    author:authorSchema
})

export const cursesModel=model("curses",courseSchema)