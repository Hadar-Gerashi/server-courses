import { connect } from "mongoose";

export function connectToDB()
{
    connect("mongodb+srv://hadargerashi2005:#hadar#2005@cluster0.7ood8.mongodb.net/").then(con=>console.log("mongo DB connected"))
    .catch(err=>{
        console.log("cannot connect mongo DB "+err)
        process.exit(1)
    })

}