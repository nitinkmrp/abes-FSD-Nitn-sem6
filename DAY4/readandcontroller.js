import fs from "fs/promises";
import { readFile,writeFile } from "./readandwritefile.js";



const writeFileData = async (path, data) => {
    try {
        const fileData = await readFile(path, data);
        const updatedData = [...fileData, data];
        await writeFile(path, JSON.stringify(updatedData, null, 2));
    } catch (error) {
        console.log("Error writing file:", error);

        
    }
}
writeFileData("./student.json",data);

const readFileData = async (path) => {
    try {
        const filedata = await readFile(path);
        console.log("File data:", filedata);
    } catch (error) {
        console.log("Error reading file:", error);
    }
}
readFileData("./student.json"); 

