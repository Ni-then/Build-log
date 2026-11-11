import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";   
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // const hashedPassword = bcrypt.hashSync(password, 10);

    // do db validations, fetch id of user from db
    const token = jwt.sign({
        username:username
    }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res.send("Logged in!");
});

app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET) 
    // Get email of the user from the database
    res.send({
        username:decoded.username
    })
});


app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    })
});

app.listen(3000,() => {
    console.log("Server is running on port 3000");
}) 