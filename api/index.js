import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import courseRoutes from "./routes/courses.js"
import enrollmentRoutes from "./routes/enrollments.js"
import periodRoutes from "./routes/period.js"

const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/courses", courseRoutes)
app.use("/api/enrollments", enrollmentRoutes)
app.use("/api/periods", periodRoutes)

app.listen(8800, ()=>{
    console.log("Connected!")
})