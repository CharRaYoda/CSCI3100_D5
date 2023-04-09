import express from "express";
import {
  getCourseByID,
  getCourseByName,
  selectCourse,
  getCourseByDepartment
} from "../controllers/courses.js";

const router = express.Router();

router.get("/id/:courseId", getCourseByID);
router.get("/name/:courseName", getCourseByName);
router.get("/department/:courseDepartment", getCourseByDepartment);
router.post("/selectCourse", selectCourse);

export default router;