import express from "express";
import {
  getCourseByID,
  selectCourse
} from "../controllers/courses.js";

const router = express.Router();

router.get("/:courseCode", getCourseByID);
router.post("/selectCourse", selectCourse);

export default router;