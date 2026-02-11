import { mkdir } from "fs";
import fs from "fs/promises";
// const makedir=async(path)=>{
//     try {
//         await fs.mkdir(path);   
//         console.log("Directory created successfully");
//     } catch (error) {
//         console.log("Error creating directory:", error);
//     }
// }  
// makedir("../DAY4"); 
// const readdirr=async(path)=>{
//     try {
//         await fs.readdir(path);   
//         console.log("Directory read successfully");
//         console.log("Contents of directory:", await fs.readdir(path));
//     } catch (error) {
//         console.log("Error reading directory:", error);
//     }
// }  
// readdirr("../DAY4"); 
const removedir=async(path)=>{
    try {
        await fs.rmdir(path);   
        console.log("Directory removed successfully");
    } catch (error) {
        console.log("Error removing   directory:", error);
    }
}  
removedir("../DAY4"); 