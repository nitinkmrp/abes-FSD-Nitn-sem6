import { readFile,writeFile } from "./helper.js ";
export const changePassword = async (userDDetails, FILE) => {
    const { email, password } = userDDetails;
    if (!email || !password) return { message: "All fields are required" };
    
    const users = await readFile(FILE);
    if (users.length === 0) return { message: "No users found" };

    const user = users.find((user) => user.email === userDDetails.email);
    if (!user) return { message: "User not found" };

    const updatedUsers = users.map((user) => 
         user.email === userDDetails.email?{...user,...userDDetails }:user);

    const response = await writeFile(updatedUsers,FILE);
    return response.status === 200 ? { message: "Password updated successfully" } : { message: "Error updating password" };
          
    
}