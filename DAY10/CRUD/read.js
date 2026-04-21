import dbConnect from "../index.js";

// const findUser = async () => {
//     try {
//         const db = await dbConnect();
//         const loginCollection = db.collection("login");
//         const users = await loginCollection.find().toArray();
//         console.log(users);
//     } catch (error) {
//         console.log("Find Error", error);
//     }
// }

// findUser();

const findUser = async () => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");
        const users = await loginCollection.findOne({email:"abc@gmail.com"});
        console.log(users);
    } catch (error) {
        console.log("Find Error", error);
    }
}

findUser();