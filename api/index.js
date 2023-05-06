import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import courseRoutes from "./routes/courses.js"
import enrollmentRoutes from "./routes/enrollments.js"

const app = express()

// Routes for the whole application
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/courses", courseRoutes)
app.use("/api/enrollments", enrollmentRoutes)

app.listen(8800, ()=>{
    console.log("Connected!")
})