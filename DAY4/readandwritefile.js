import fs from "fs/promises";
// import fs from "glob-stream";
export const readFile = async(path) => {
    try {
    const data = await fs.readFile(path,'utf-8');
    return JSON.parse(data);
    } catch (error) {
    return'unable to read file';
    }   
}
//  readFileSync('./student.json')
//  .then(data => console.log(data))
//  .catch(error => console.log("error:", error));

export const writeFile = async(path, data) => {
    try {
        await fs.writeFile(path,data);
        return 'file written successfully';
    } catch (error) {
        return 'unable to write file';


    }
}


