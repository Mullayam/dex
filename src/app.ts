import express, { Application } from "express"
import path from "path"
import router from "./routers/router"

const app: Application = express()

// middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, "../", "public")))

// routes
app.use("/api/v1", router)

export default app

