import { readFile, writeFile } from "./helper.js";
export const register = async (userDetails, FILE) => {
    const { name, email, password, gender } = userDetails;
    if (!name || !email || !password || !gender)
        return { message: "All fields are required" };

    let updatedUsers = [];

    const users = await readFile(FILE);
    if (users.length === 0) updatedUsers = [userDetails];

    const user = users.find((user) => user.email === email);
    if (user) return { message: "User has been already registered." };

    updatedUsers = [...users, userDetails];

    const response = await writeFile(updatedUsers, FILE);
    return response;
}
// register({ name: "abc", email: "abc@gmail.com", password: "1234", gender: "F" }, "./user.json");