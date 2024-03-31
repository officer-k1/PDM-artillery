import express from "express";
var router = express.Router();
import { getAllTargetsHandler } from '../controllers/targets.controller.js'

/* GET home page. */
router.route('/').get(getAllTargetsHandler)

export default router