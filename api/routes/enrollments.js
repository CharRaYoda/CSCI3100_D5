import express from "express";
import { getEnrollment, dropEnrollment, GradeUpload } from "../controllers/enrollments.js";

const router = express.Router();

router.get("/:uid", getEnrollment);
router.post("/drop", dropEnrollment);
router.put("/GradeUpload", GradeUpload);

export default router;