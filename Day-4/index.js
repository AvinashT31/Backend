import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import morgan from 'morgan';
import { register, login } from "./Controller/userController.js";

const app = express();
dotenv.config()

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("working");
})

app.post("/register", register)
app.post("/login", login)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connection is estashblishment")
}).catch((error) => {
    console.log("error is present while connecting database....")
})

app.listen(process.env.PORT, () => {
    console.log(`port is running on ${process.env.PORT}`)
})