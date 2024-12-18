import { model,Types,Schema } from "mongoose";
import {courseSchema} from "./course.js"



const courseForStuSceme=Schema({
    Date:{type:Date,default:new Date()},
    userId:{
        type: Types.ObjectId,
        ref:"student"
    },
    course:[courseSchema],
    isPay:{type:Boolean,default:false}
 })

 export const ModelCourseForStu=model("courseForStudent",courseForStuSceme)




 








