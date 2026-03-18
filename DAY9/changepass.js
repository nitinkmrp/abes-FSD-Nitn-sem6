import { readFile,writeFile } from "./helper.js ";
export const changePassword = async (email, oldPassword, newPassword, FILE) => {
    if (!email || !oldPassword || !newPassword)
        return { message: "All fields are required" };
    
}