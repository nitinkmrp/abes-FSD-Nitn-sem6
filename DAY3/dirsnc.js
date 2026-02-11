import fs from 'fs';

const makeDirSync=(path)=>{
    try {
        fs.mkdirSync(path);
        console.log("Directory created successfully");
    } catch (error) {
        console.log("Error creating directory:", error);
    }
}   
makeDirSync("../DAY5");
