import express from 'express';
import { createUser,readUsers,readUser,updateUser,deleteUser } from './controller/crud.js';
import dbConnect from "./config/db.js";
import errorHandler from './middleware/errorhandler.js';
const app=express();
app.use(express.json()); //middleware 
dbConnect();
const PORT=8800;
app.post("/users", createUser);        // CREATE
app.get("/users", readUsers);          // GET ALL USERS
app.get("/users/:email", readUser);    // GET SINGLE USER
app.put("/users/:email", updateUser);  // UPDATE USER
app.delete("/users/:email", deleteUser); // DELETE USER
app.use(errorHandler);

app.listen(PORT,()=>{console.log(`server is running at http://localhost:${PORT}`)});