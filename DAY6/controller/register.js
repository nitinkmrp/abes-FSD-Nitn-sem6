import { readFile,writeFile } from "../Utils/readandwriteFile.js";

const FILE = "../user.json";

const register = async (users, userDetails) => {
    const updatedUser = [...users, userDetails];
    const response = await writeFile(FILE, updatedUser);
    console.log(response.message);
    return;
}
const userRegistration = async (userDetails) => {
    const { name, email, password, gender } = userDetails;
    if (!name || !email || !password || !gender) {
        console.log("users entries are not complete. unable to register");
        return;
    }
    const users = await readFile(FILE);
    if (users.length === 0) {
        register(users, userDetails);
    }
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
        console.log("Already Registered");
        return;
    }
    register(users, userDetails);
}
userRegistration({
    "name": "Edik Goaks",
    "email": "egoaksdf2@bbb.org",
    "password": "oPsf7*P?U@E",
    "gender": "Male"
})