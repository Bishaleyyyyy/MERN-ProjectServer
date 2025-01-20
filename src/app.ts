import express from 'express'
const app = express()
import "./database/connection"
import UserRoute from "./routes/UserRoute"

app.use(express.json())

app.use("/api/auth", UserRoute)


export default app;