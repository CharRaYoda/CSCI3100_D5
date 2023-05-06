import express from "express";
import { GetEnrollment, GetCgpa, SelectCourse, DropEnrollment, GradeUpload, SetPeriod, SpecialAddDrop } from "../controllers/enrollments.js";

const router = express.Router();

// Routes for different functions related to enrollment
router.get("/:uid", GetEnrollment);
router.get("/cgpa/:uid", GetCgpa);
router.post("/SelectCourse", SelectCourse);
router.post("/drop", DropEnrollment);
router.put("/GradeUpload", GradeUpload);
router.put("/period", SetPeriod);
router.post("/SpecialAddDrop", SpecialAddDrop);

export default router;