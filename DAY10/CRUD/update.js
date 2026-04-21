import dbConnect from "../index.js";

// const updateUser = async() => {
//     try {
//         const db = await dbConnect();
//         const loginCollection = db.collection("login");
//         const user = await loginCollection.updateOne({email:"abc@gmail.com"}, {$set: {name:"def", email:"def@gmail.com"}});
//         console.log(user.modifiedCount);
//     } catch(error) {
//         console.log("Updation Error", error);
//     }
// }
// updateUser();

const updateUsers = async() => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");
        const user = await loginCollection.updateMany({email:"xyz@gmail.com"}, {$set: {name:"fgh", email:"fgh@gmail.com"}});
        console.log(user.modifiedCount);
    } catch(error) {
        console.log("Updation Error", error);
    }
}

updateUsers();