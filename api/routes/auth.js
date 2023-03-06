import express from "express"
import { regsiter, login, logout } from "../controllers/auth.js"

const router = express.Router()

router.post("/register", regsiter)
router.post("/login", login)
router.post("/logout", logout)

export default router