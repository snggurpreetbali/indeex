import express from "express"
import bodyParser from "body-Parser"
import userRouter from "./routes/user.js"

const server = express()
const PORT =8888
server.use (bodyParser.json())

//server.get("/",(req,res)=>res.send("welcome to my library"))
server.get("/",(req,res)=>res.send("welcome to my library"))
server.use("/user",userRouter)

// server.get("/",homepage)
server.listen(PORT)

