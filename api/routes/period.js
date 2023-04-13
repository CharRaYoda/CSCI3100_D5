import express from "express";
import {
    getAllPeriods,
    addPeriod,
} from "../controllers/period.js";

const router = express.Router();

router.get("/", getAllPeriods);
router.post("/", addPeriod);


export default router;