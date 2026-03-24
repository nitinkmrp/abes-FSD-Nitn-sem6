import { readFile,writeFile } from "./helper.js";
export const deleteUser = async (userDetails, FILE) => {
    const {email,password}=userDetails;
    if(!email||!password)
        return {message:"All fields are required"};
    const users = await readFile(FILE);
    if(users.length === 0) return {message:"No users found"};

    const user = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    if(!user) return {message:"User not found"};
    if(user.password !== password) return {message:"Invalid password"};
    const updatedUsers  = users.filter((user) => user.email.toLowerCase() !== email.toLowerCase());
    // if(user.password !== password) return {message:"Invalid password"};
    
    const response = await writeFile(updatedUsers,FILE);
    return response.status === 200 ? { message: "User deleted successfully" } : { message: "Error deleting user" };
}
// deleteUser({email:"jgrinikhinov1@dyndns.org",password:"cD9)HJ>F(b"},"./User.json").then((res) => console.log(res)).catch((err) => console.log(err));  