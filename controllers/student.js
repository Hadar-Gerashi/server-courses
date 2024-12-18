import {studentModel} from '../models/student.js'



export async function getAll(req,res){

    try{
        let data= await studentModel.find()
        res.json(data)

    }

    catch(err){
        console.log(err)
        res.status(400).json({title:"cannot get all",massege:err.massege})

    }



}






export async function getById(req,res){
let {id}=req.params
    try{
        let data= await studentModel.findById(id)
        if(!data)
        return res.status(400).json({title:"not have this id",massege:"not found this id"})
        res.json(data)
    }

    catch(err){
        console.log(err)
        res.status(400).json({title:"cannot get by id",massege:err.massege})

    }



}





export async function add_sighIn(req,res){
let {body}=req

if(!body.password||!body.userName||!body.email||!body.phone)
return res.status(400).json({title:"cannot have all details",massege:"you miss some of details"})

    try{
        let newS=new studentModel(body)
        let data= await newS.save()
        res.json(data)

    }

    catch(err){
        console.log(err)
        res.status(400).json({title:"cannot add",massege:err.massege})

    }



}





export async function update(req,res){
    try{
        let data= await studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!data)
        return   res.status(400).json({title:"cannot update",massege:"not such this id"})


        res.json(data)

    }

    catch(err){
        console.log(err)
        res.status(400).json({title:"cannot update",massege:err.massege})

    }



}






export async function logIn_add(req,res){

    try{

        let data=await studentModel.findOne({password:req.params.password,userName:req.params.userName})
        if(!data)
       return res.status(400).json({title:"cannot login",massege:"not have this user"})

       res.json(data)

    }

    catch(err){
        console.log(err)
        res.status(400).json({title:"cannot login",massege:err.massege})

    }



}



export async function payFine(req,res){
    let {id}=req.params
    let {sum}=req.body

    try{
        let pay=await studentModel.findByIdAndUpdate(id, {$inc:{ fine: -sum }},{new:true})
        if(!pay)
        return res.status(400).json({title:"cannot payFine",massege:"cannot such this id"})
         res.json(pay)

       

    }

    catch(err){
        console.log(err)
        res.status(400).json({title:"cannot payFine",massege:err.massege})

    }



}