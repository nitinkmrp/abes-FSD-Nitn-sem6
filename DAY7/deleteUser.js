import { readFile, writeFile } from "../DAY6/Utils/readandwriteFile.js";


const FILE = "../DAY6/user.json";

const deleteUser = async (email) => {
    const users = await readFile(FILE);

    if (!users || users.length === 0) {
        return { message: "No users found", status: 404 };
    }

    const updatedUsers = users.filter((user) => user.email !== email);

    if (updatedUsers.length === users.length) {
        return { message: "User not found", status: 404 };
    }

    await writeFile(FILE, updatedUsers);

    return { message: "User deleted successfully", status: 200 };
};

deleteUser("jbrose2@google.pl5").then((response) => console.log(response.message));