import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import userRouter from "./Router/UserRouter"
import morgan from "morgan"

const app = express()

mongoose.connect(process.env.URL as string).then(() => {
    console.log("DB Connected");
})

app.use(express.json())

app.use(morgan("dev"))

app.use(cors({
    credentials: true,
    origin: true
}))

app.get("/", (req, res) => {
    res.send("Request accepted")
})

app.use("/api/my/user" ,userRouter)

app.listen(process.env.PORT, () => {
    console.log("Server started");
})