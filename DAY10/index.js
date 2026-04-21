import { MongoClient } from "mongodb";
const MONGO_URI = "mongodb+srv://user:admin@userlogindetails.w8im87u.mongodb.net/?appName=userLoginDetails";
const DB_NAME = "users";
const client = new MongoClient(MONGO_URI);
const dbConnect = async () => {
    try {
        await client.connect();
        console.log("MongoDB connected sucessfully");
        return client.db(DB_NAME);
    } catch (error) {
        console.log("Connection Error:", error);
    }
}

export default dbConnect;