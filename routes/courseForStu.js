import { Router } from "express";
import { getAlls, getById,getByUserId ,addOne,updateIsPay} from "../controllers/courseForStu.js";


const routes=Router()
routes.get("/", getAlls)
routes.get("/:id",getById)
routes.get("/byUserId/:userId",getByUserId)
routes.post("/",addOne)
routes.put("/:id",updateIsPay)
// routes.put("/")


export default routes