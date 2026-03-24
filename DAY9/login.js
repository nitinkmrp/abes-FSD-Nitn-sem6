import { readFile } from "./helper.js";
export const login = async (userDetails, FILE) => {
    const { email, password } = userDetails;
    if (!email || !password) return { message: "All details are required" };

    const users = await readFile(FILE);
    if (users.length === 0) return { message: "User is not existing" };

    const user = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    if (!user) return { message: "User is not existing" };

    return user.password === password
        ? { message: "Login successfull" }
        : { message: "Incorrect Password" };
}