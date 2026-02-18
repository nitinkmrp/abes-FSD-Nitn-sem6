import {readFile, writeFile} from "../DAY4/readandwritefile.js";
const filePath = "../DAY4/student.json";
const updateStudent = async (id, data) => {
   const students = await readFile(filePath);
   if (!students) {
      console.log("No students found.");

        return;             
   }   
   const filteredStudent = students.map((student) => student.id === id ? {...student,...data} : student);
     
      console.log(filteredStudent);
      
   
//    await writeFile(filePath, filteredStudent); 
};
 updateStudent(1,{first_name: "BAC",last_name: "xyz"});