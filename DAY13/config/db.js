import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("DB connection established sucessfully");
    }
    catch(error) {
        console.log("DB connection error");
    }
}

export default dbConnect;