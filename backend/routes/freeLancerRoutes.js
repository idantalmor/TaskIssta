import express from "express"
const router = express.Router();
import { createNewFreeLancer, deleteFreeLancer } from "../controllers/freeLancerController.js";


router.route('/').post(createNewFreeLancer).delete(deleteFreeLancer)


export default router;