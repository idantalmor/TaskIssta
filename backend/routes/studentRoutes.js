import express from "express"
const router = express.Router();
import { createNewStudent } from "../controllers/studentController.js";


router.route('/').post(createNewStudent)


// router.get("/").get(getEmployee)

export default router;