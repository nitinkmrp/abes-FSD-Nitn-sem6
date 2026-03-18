
import { readFile,writeFile } from "./helper.js";
export const register = async (userDetails, FILE) => {
    const { name, email, password ,gender } = userDetails;
    if (!name || !email || !password || !gender )
        return { message: "All fields are required" };//check if email is valid
    let updatedUsers = [];
    const users = await readFile(FILE);
    // console.log(users);
    
    if (users.length === 0) updatedUsers = [userDetails];
    const user = users.find((user) => user.email === email);
    if (user)
        return { message: "User already exists" };
    updatedUsers = [...users, userDetails];

    const response = await writeFile(updatedUsers,FILE);
    return response;
    
    


}
// register({name:"Nitin",email:"nitinkmro@hhamnd.com",password:"1235" ,gender:"f"},"./user.json");