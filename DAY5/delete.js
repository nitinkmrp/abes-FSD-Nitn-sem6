import { readFile,writeFile } from "../DAY4/readandwritefile.js";
const filePath = "../DAY4/student.json";
const deleteStudent = async (id) => {
   const students = await readFile(filePath);
    if (!students) {
        console.log("No students found.");
        return;
    }
    const user = students.filter((student) => student.id === id);
    if (user.length === 0) {
        console.log("Student not found.");
       
    }else { 
        const filteredStudent = students.filter((student) => student.id !== id);
        await writeFile(filePath, JSON.stringify(filteredStudent, null, 2))
    }
};
    deleteStudent(2);