import express from "express"
const router = express.Router();
import { createNewEmployee, getAllEmployee, updateEmployee } from "../controllers/employeeController.js";


router.route('/').post(createNewEmployee).get(getAllEmployee).put(updateEmployee)


// router.get("/").get(getEmployee)

export default router;