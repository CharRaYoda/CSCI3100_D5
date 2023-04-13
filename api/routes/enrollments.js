import express from "express";
import { GetEnrollment, GetCgpa, SelectCourse, DropEnrollment, GradeUpload, SpecialAddDrop } from "../controllers/enrollments.js";

const router = express.Router();

router.get("/:uid", GetEnrollment);
router.get("/cgpa/:uid", GetCgpa);
router.post("/SelectCourse", SelectCourse);
router.post("/drop", DropEnrollment);
router.put("/GradeUpload", GradeUpload);
router.post("/SpecialAddDrop", SpecialAddDrop);

export default router;