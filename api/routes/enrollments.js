import express from "express";
import { getEnrollment, getCgpa, dropEnrollment, GradeUpload } from "../controllers/enrollments.js";

const router = express.Router();

router.get("/:uid", getEnrollment);
router.get("/cgpa/:uid", getCgpa);
router.post("/drop", dropEnrollment);
router.put("/GradeUpload", GradeUpload);

export default router;