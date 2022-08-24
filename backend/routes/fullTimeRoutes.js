import express from "express"
const router = express.Router();
import { createNewFullTime } from "../controllers/fullTimeController.js";


router.route('/').post(createNewFullTime)


// router.get("/").get(getEmployee)

export default router;