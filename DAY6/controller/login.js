import { readFile } from "../utils/readFile.js";
// const FILE = "../user.json";
export const userLogin = async (userDetail,FILE) => {
    const { email, password } = userDetail;

    const users = await readFile(FILE);
    if (users.length === 0) {
        console.log("user is not existing");
        return { message: "user is not existing", status: 400 };
    }
    const user = users.filter((u) => u.email === email);
    console.log(user);

    if (user.length === 0) {
        console.log("user is not existing");
        return { message: "user is not existing", status: 400 };
    }
    return (user[0].password === password) ? { message: "Login Successful", status: 200 } : { message: "Incorrect Password", status: 500 };
}
// userLogin({ email: "gpetrowsky1@clickbank.net", password: "rF1>d}q,0$}" }); //login successful
// userLogin({ email: "gpetrowsky1@clickbank.net", password: "12345" }); //incorrect password
// userLogin({ email: "abc@gmail.com", password: "12345" }) //user is not existing