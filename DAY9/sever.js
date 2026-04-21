import express from "express";
import { readFile } from "./helper.js";
import { login } from "./login.js";
const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    const users = await readFile("./User.json");
    res.status(200).json({ users: users });
});
app.post("/login", async (req, res) => {
    try{
    const response= await login(req.body, "./User.json");
    res.status(200).json({ message: response.message });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
});
app.post('/register',async (req, res)=>{
    try{
        
    }
})
app.listen(8500, () => {
  console.log("Server is running at http://localhost:8500");
    });
