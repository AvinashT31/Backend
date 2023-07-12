import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Addnewproduct, Deleteproduct, Getsingleproduct, Updateproduct, getallproduct } from "./Controller/fakestorecontroller.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    return res.send("working....");
})

app.get("/Get-all-products", getallproduct);
app.get("/Get-single-product", Getsingleproduct);
app.post("/Add-new-product", Addnewproduct);
app.patch("/Update-product", Updateproduct);
app.delete("/Delete-product", Deleteproduct);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("db is connected")
}).catch((error) => {
    console.log("error is present", -error)
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})