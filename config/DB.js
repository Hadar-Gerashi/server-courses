import { connect } from "mongoose";

export function connectToDB()
{
    connect("mongodb://localhost:27017/StudiesDB").then(con=>console.log("mongo DB connected"))
    .catch(err=>{
        console.log("cannot connect mongo DB "+err)
        process.exit(1)
    })

}