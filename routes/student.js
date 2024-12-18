import { Router } from "express";
import { add_sighIn, getById, logIn_add, getAll, update } from "../controllers/student.js";


const routes=Router()


routes.get("/",getAll)
routes.get("/:id",getById)
routes.post("/login",logIn_add)
routes.post("/",add_sighIn)
routes.put("/:id",update)




export default routes