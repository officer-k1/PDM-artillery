import express from "express";
var router = express.Router();
import { getAllSoldiersHandler } from '../controllers/soldiers.controller.js'

/* GET home page. */
router.route('/').get(getAllSoldiersHandler)

export default router