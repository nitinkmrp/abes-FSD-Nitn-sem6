import mongoose from 'mongoose';
const MONGO_URI = "mongodb+srv://user:admin@cluster0.nieebtw.mongodb.net/?appName=Cluster0";
const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connection is estabilshed successfully");
    } catch(error) {
        console.log("DB connection error", error.message);
    }
}

// dbConnect();

export default dbConnect;