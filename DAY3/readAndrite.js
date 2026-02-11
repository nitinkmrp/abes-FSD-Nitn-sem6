import { write } from "fs";
import fs from "fs/promises";
console.log(fs);
const writeFile=async(path, data)=>{
    try {   
    await fs.writeFile(path, data);
    console.log("File Written successfully");
    } catch (error) {
        console.log("Error unable too perform write operation");
    }


}



const readFile=async(path)=>{
    try {
    const data=await fs.readFile(path, "utf-8"); 
    console.log("File read successfully");
    console.log(data);
    }
 catch (error) {
    console.log("Error unable too perform read operation");
}
}

    

const appendFile=async(path, data)=>{
    try {
    await fs.appendFile(path, data); 
    console.log("File append successfully");
    
    }
 catch (error) {
    console.log("Error unable too perform read operation");
}
}


console.log("Before write");
writeFile("example.txt", "Hello World1");
console.log("After write");
console.log("Before read");
readFile("example.txt");
console.log("After read");  
console.log("Before append");
appendFile("example.txt", "Hello World2");
console.log("After append");