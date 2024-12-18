import {cursesModel} from '../models/course.js'


export async function getAll(req, res) {
    try {
        let data=await cursesModel.find()
        res.json(data)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot get all courses", massege: err.massege })
    }
}



export async function getAllById(req, res) {
    let {id}=req.params
    try {
        let data=await cursesModel.findById(id)
        if(!data)
        return res.status(400).json({ title: "cannot such this id", massege: err.massege })

        res.json(data)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot get id", massege: err.massege })
    }
}




export async function deleteById(req, res) {
    let {id}=req.params
    try {
        let data=await cursesModel.findByIdAndDelete(id)
        if(!data)
        return res.status(400).json({ title: "cannot found such id to delete", massege: err.massege })

        res.json(data)

    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot delete", massege: err.massege })
    }
}




export async function adds(req, res) {
    let {body}=req

    if(!body.name ||!body.subjects||!body.price||!body.author)
    return res.status(400).json({ title: "cannot put all details", massege: "not have all details" })

    try {

        let newData=new cursesModel(body)
        let data=await newData.save()
        res.json(data)
    
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot add", massege: err.massege })
    }
}



export async function update(req, res) {
    let {id}=req.params

    try {
        let data=await cursesModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!data)
        return res.status(400).json({ title: "cannot find by id", massege: "not have such id" })
        res.json(data)

    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot update", massege: err.massege })
    }
}