import { readFile, writeFile } from "..//Utils/readandwriteFile.js";
const FILE = "../user.json";

// export const userLogin = async (data) => {
//     const { email, password } = data;
//     const usersData = await readFile(FILE);
//     let message = "";
//     if (usersData.length === 0) {
//         message = "user is not registered";
//         return;
//     }
//     const user = usersData.filter((user) => user.email === email);

//     if (user.length === 0) {
//         message = "user is not registered";
//         return;
//     } else {
//         user[0].password === password ?
//             message = "Login successfull":
//             message = "password incorrect";
//     }
//     return message;
// }
// console.log(userLogin({ email: "nitin@gmail.com", password: "123456" }));

const userLogin = async (userDetail) => {
    const { email, password } = userDetail;

    const users = await readFile(FILE);
    if (users.length === 0) {
        console.log("user is not existing");
        return;
    }

    const user = users.filter((u) => u.email === email);
    if (user.length === 0) {
        console.log("user is not existing");
        return;
    }
    (user[0].password === password) ? console.log("Login Successful") : console.log("Incorrect password");
}
console.log(userLogin({ email: "ndusting9@reference.com", password: "vK9/C\\PfVc'gx_" }));