import express from "express";
import { getCourses } from "../controllers/teach.js";

const router = express.Router();

router.get("/:uid", getCourses);

export default router;