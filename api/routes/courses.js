import express from "express";
import {
  getCourseByID,
  getCourseByName,
  selectCourse,
  getCourseByDepartment,
  addCourse,
  delCourse,
  getAllCourses,
  getCourseByTime
} from "../controllers/courses.js";

const router = express.Router();

router.get("/id/:courseId", getCourseByID);
router.get("/name/:courseName", getCourseByName);
router.get("/department/:courseDepartment", getCourseByDepartment);
router.post("/time", getCourseByTime);
router.get("/:courseId", getCourseByID);
router.get("/", getAllCourses);
router.post("/", addCourse);
router.post("/del", delCourse);
router.post("/selectCourse", selectCourse);

export default router;