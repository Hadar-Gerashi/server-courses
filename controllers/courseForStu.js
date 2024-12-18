import { ModelCourseForStu } from "../models/courseForStu.js";


export async function getAlls(req,res){
try{
    let result=await ModelCourseForStu.find()
    res.json(result)
}
catch(err){
    console.log(err)
    res.status(400).json({title:"cannot get all",massege:err.massege})
}
}


export async function getById(req,res){
    let {id}=req.params
    try{
        let result=await ModelCourseForStu.findById(id)
        if(!result)
        return res.status(404).json({title:"cannot get",massege:"not found such id"})
        res.json(result)
    }
    catch(err){
        console.log(err)
        res.status(400).json({title:"cannot get by id",massege:err.massege})
    }
    }



    export async function getByUserId(req,res){
        let {userId}=req.params
        try{
            let result=await ModelCourseForStu.find({userId:userId})
            res.json(result)
        }
        catch(err){
            console.log(err)
            res.status(400).json({title:"cannot get by Userid",massege:err.massege})
        }
        }



        
    export async function addOne(req,res){

        let {body}=req;
        if(!body.userId ||!body.course||!body.course.length)
        return res.status(404).json({title:"cannot add",massege:"not have all details"})
        


        try{
            let user=await ModelCourseForStu.findById(body.userId)
             if(!user)
             return res.status(404).json({title:"cannot add",massege:"not have such userid"})

             if(user.fine>0)
             return res.status(404).json({title:"cannot add",massege:"you have fine"})

            let n=new ModelCourseForStu(body)
            await n.save()
            res.json(n)
        
        }
        catch(err){
            console.log(err)
            res.status(400).json({title:"cannot add",massege:err.massege})
        }
        }




        export async function updateIsPay(req,res){
           
            try{
                let result=await ModelCourseForStu.findByIdAndUpdate(req.params.id,{isPay:true},{new:true})
                if(!result)
                return res.status(404).json({title:"cannot update",massege:"not found such id"})
                res.json(result)

                if(new Date(result.Date)<new Date()){
                await ModelCourseForStu.findByIdAndUpdate(result.userId,{$inc:{ fine: -sum }},{new:true})
                res.json({result:result,massege:"you got a fine"})
            }
            res.json(result)

            }
            catch(err){
                console.log(err)
                res.status(400).json({title:"cannot get by id",massege:err.massege})
            }
            }
               

          


        

