import fs from 'fs';
const filestat=async(path)=>{
    try {
        const stats=await fs.promises.stat(path);
        console.log(" stats.size:", stats.size);
        console.log(" stats.isFile:", stats.isFile());
        console.log(" stats.isDirectory:", stats.isDirectory());
        
    } catch (error) {
        console.log("Error getting file stats:", error);
    }   
}
filestat("../DAY3/dir.js");