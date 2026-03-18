import fs from "fs/promises";
export const readFile = async (FILE) => {
    try {
        const data = await fs.readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log("unable to read file");
    }
}
export const writeFile = async ( data,FILE) => {
    try {
        await fs.writeFile(FILE, JSON.stringify(data, null, 2));
        return { message: "User Registered Successfully" };
    } catch (error) {
        console.log("unable to write file");
    }
}
