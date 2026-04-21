import express from "express";
import dbConnect from "./config/db.js";
import LoggedUserDetails from "./model/loggedUserDetails.js";

import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT ;

app.use(express.json()); // built in middleware
app.use(userRoutes);
dbConnect();
app.use(async(req, res, next) => {
    try {
        await LoggedUserDetails.create({
            ip: req.ip,
            url: req.url,
            method: req.method,
            header: req.headers["user-agent"]
        })
        next();
    } catch(error) {
        console.log("Logging Error", error.message);
    }
})

app.get("/users", (req, res) => {
    res.status(200).json({ message: "ok" })
})
app.use("/",userRoutes)
app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));