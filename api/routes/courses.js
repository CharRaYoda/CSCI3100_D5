import express from "express";
import {
  getCourseByID,
  getCourseByName,
  getCourseByDepartment,
  addCourse,
  delCourse,
  getAllCourses,
  getCourseByTime,
  courseUpdate,
  ClassroomUpdate,
  getCourseTeaching
} from "../controllers/courses.js";

const router = express.Router();

// Routes for different functions related to courses
router.get("/id/:courseId", getCourseByID);
router.get("/name/:courseName", getCourseByName);
router.get("/department/:courseDepartment", getCourseByDepartment);
router.get("/teach/:instructor", getCourseTeaching);
router.post("/time", getCourseByTime);
router.get("/:courseId", getCourseByID);
router.get("/", getAllCourses);
router.post("/", addCourse);
router.post("/del", delCourse);
router.put("/CourseUpdate", courseUpdate);
router.post("/ClassroomBook", ClassroomUpdate);

export default router;