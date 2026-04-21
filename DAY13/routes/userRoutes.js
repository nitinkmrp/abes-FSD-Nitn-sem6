import express from "express";

const router = express.Router();
router.use((req,res,next) =>{
    console.log("router levrl middeleware triggered");
    next();
})
router.get("/users", (req, res) => {
    res.status(200).json({ message: "user" })
})
router.get("/users", (req, res) => {
    res.status(200).json({ message: "user profile" })
})


router.get("/users", (req, res) => {
    res.status(200).json({ message: "user details" })
})


export default router;


