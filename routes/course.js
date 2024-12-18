import { Router } from "express";
import { adds, deleteById, getAll, getAllById, update } from "../controllers/course.js";

const router=Router()

router.get("/",getAll)
router.get("/:id",getAllById)
router.post("/",adds)
router.put("/:id",update)
router.delete("/:id",deleteById)

export default router

