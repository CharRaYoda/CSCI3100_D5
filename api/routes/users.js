import express from "express"
import {
    getAllUsers,
    delUser,
    addUser,
    updatePassword
  } from "../controllers/users.js";

const router = express.Router()

router.get('/',getAllUsers);
router.post("/", getAllUsers);
router.post("/del", delUser);
router.post("/add", addUser);
router.put("/updatePassword", updatePassword);

export default router