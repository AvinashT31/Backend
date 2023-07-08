import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import user from "./models/user.js";
import morgan from "morgan";


const app = express();

app.use(morgan('dev'));
app.use(express.json());

dotenv.config()

app.get("/", (req, res) => {
    res.send("working....");
})

app.post("/register", async (req, res) => {
    try {
        const { name, email, number, password } = req.body

        if (!name) return res.send("name is required")
        if (!email) return res.send("email is required")
        if (!number) return res.send("number is required")
        if (!password) return res.send("password is required")

        const newUser = new user({
            name: name,
            email: email,
            number,
            password
        })
        await newUser.save();
        res.send("Registration complete....")
    } catch (error) {
        res.send(error)
    }
})

app.put("/updatedData/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        if (!id) return res.send("id is required")
        const { name, email } = req.body;
        if (!name && !email) return res.send("input field is required")

        const result = await user.findByIdAndUpdate(id, { name: name, email: email })
        console.log(result);
        res.send("data is updated")
    } catch (error) {
        return res.send(error)
    }
})

app.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) return res.send("id is required");
        await user.findByIdAndDelete(id)
        res.send("user deleted")
    } catch (error) {
        return res.send(error)
    }
})


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to DB")
}).catch((error) => {
    console.log("Error while connecting mongofb :- ", error)
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})