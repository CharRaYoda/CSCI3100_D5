import express from "express";
import { getEnrollment, dropEnrollment } from "../controllers/enrollment.js"

const router = express.Router();

router.get("/:uid", getEnrollment);
router.post("/drop", dropEnrollment);

export default router;