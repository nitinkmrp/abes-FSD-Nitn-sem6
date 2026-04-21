import dbConnect from "../index.js";

// const insertUser = async () => {
//     try {
//         const db = await dbConnect();
//         const loginCollection = db.collection("login");
//         const user = await loginCollection.insertOne({ email: "abc@gmail.com", password: "12345", gender: "M" });
//         console.log("Inserted succesfully", user.insertedId);
//     } catch (error) {
//         console.log("Insertion Error", error);
//     }
// }
// insertUser();

const insertUsers = async() => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");
        const user = {
            name:"xyz",
            email:"xyz@gmail.com",
            password:"12345",
            gender: "F"
        }
        const users = await loginCollection.insertMany([user, user, user]);
        //console.log("Inserted succesfully", users.insertedId);
    } catch (error) {
        console.log("Insertion Error", error);
    }
}
insertUsers();