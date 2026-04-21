import dbConnect from "../index.js";

// const deleteUser = async() => {
//     try {
//         const db = await dbConnect();
//         const loginCollection = db.collection("login");
//         const user = await loginCollection.deleteOne({email:"abc@gmail.com"});
//         console.log(user.deletedCount);
//     } catch(error) {
//         console.log("Updation Error", error);
//     }
// }

// deleteUser();

const deleteUser = async() => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");
        const user = await loginCollection.deleteMany({email:"fgh@gmail.com"});
        console.log(user.deletedCount);
    } catch(error) {
        console.log("Updation Error", error);
    }
}

deleteUser();