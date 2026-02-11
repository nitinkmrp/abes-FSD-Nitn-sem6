import fs from 'fs';

// const makeDirSync=(path)=>{
//     try {
//         fs.mkdirSync(path);
//         console.log("Directory created successfully");
//     } catch (error) {
//         console.log("Error creating directory:", error);
//     }
// }   
// makeDirSync("../DAY5");


// const readDirSync=(path)=>{
//     try {
//         fs.readdirSync(path);
//         console.log("Directory read successfully");
//         console.log("Contents of directory:", fs.readdirSync(path));    
//     } catch (error) {
//         console.log("Error reading directory:", error);
//     }
// }   
// readDirSync("../DAY5");

const removeDirSync=(path)=>{
    try {
        fs.rmdirSync(path);
        console.log("Directory removed successfully");
    } catch (error) {
        console.log("Error removing directory:", error);
    }
}   
removeDirSync("../DAY5");


