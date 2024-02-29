import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import userRouter from "./Router/UserRouter"
import cookieParser from "cookie-parser"

const app = express()

mongoose.connect(process.env.URL as string).then(() => {
    console.log("DB Connected");
})

app.use(express.json())

app.use(cookieParser())

app.use(cors({
    credentials: true
}))

app.use("/api/my/user" ,userRouter)

app.listen(process.env.PORT, () => {
    console.log("Server started");
})