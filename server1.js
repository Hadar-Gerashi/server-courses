import express from "express";
import {connectToDB} from "./config/DB.js"
import courseRouter from "./routes/course.js";
import routes from "./routes/student.js";
import routesCourseFor from "./routes/courseForStu.js";
import dotenv from "dotenv"
import fs from "fs/promises"


function PrintToLog(req, res, next) {
    try {
        fs.appendFile("./log.txt", `${new Date().toLocaleDateString} ${req.method} ${req.url} \n`)
        next()
    }
    catch (err) {
        return res.status(400).json({ title: "error in printto log", message: err.message })
    }
}



dotenv.config()
const app = express()

connectToDB()
app.use(PrintToLog)
app.use(express.json())

app.use("/api/course",courseRouter)
app.use("/api/student",routes)
app.use("/api/courseForStudent",routesCourseFor)
// let port=process.env.PORT;

app.listen(8000,()=>{
    console.log("app is listening in port 8000")
})



