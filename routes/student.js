import { Router } from "express";
import { add_sighIn, getById, logIn_add, getAll, update,deleteById } from "../controllers/student.js";


const routes=Router()


routes.get("/",getAll)
routes.get("/:id",getById)
routes.post("/login",logIn_add)
routes.post("/",add_sighIn)
routes.put("/:id",update)
routes.delete("/:id",deleteById)




export default routes