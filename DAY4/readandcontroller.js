import fs from "fs/promises";
import { readFile,writeFile } from "./readandwritefile.js";

const data = {
  "id": 13,
  "first_name": "nitin kumar",
  "last_name": "Edards",
  "email": "bedards0@amafihjhfs.com",
  "gender": "Male"
}

const writeFileData = async (path, data) => {
    try {
        const fileData = await readFile(path, data);
        const updatedData = [];
        if (!fileData) updatedData=[{id:1,...data   }];
        else updatedData = [...fileData, {id:fileData.length+1,...data}];
        await writeFile(path, JSON.stringify(updatedData, null, 2));
        console.log("File written successfully");
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

