import { readFile, writeFile } from "../DAY6/Utils/readandwriteFile.js";

const FILE = "../DAY6/user.json";

const updateUsers = async (users, userDetails) => {
    const updatedUser = users.map((u) => {
        return u.email === userDetails.email
            ? { ...u, password: userDetails.password }
            : u;
    });

    await writeFile(FILE, updatedUser);

    return { message: "Password updated successfully", status: 201 };
};

const changePassword = async (userDetails) => {
    const { email, password } = userDetails;

    if (!email || !password) {
        return { message: "All fields required", status: 401 };
    }

    if (password.length < 8) {
        return { message: "Password must be at least 8 characters long", status: 401 };
    }

    const users = await readFile(FILE);

    if (!users || users.length === 0) {
        return { message: "No users found", status: 404 };
    }

    const existingUser = users.find((u) => u.email === email);

    if (!existingUser) {
        return { message: "User not found", status: 404 };
    }

    return await updateUsers(users, userDetails);
};

changePassword({
    email: "elillegard0@tripod.com",
    password: "nitin@123"
}).then((response) => console.log(response.message));