import fs from 'fs';
const readFileSync = (path) => {
    try {
    const data = fs.readFileSync(path,'utf-8');
    console.log(data);
    } catch (error) {
        console.log('unable to read file');
    }   
}
 

const writeFileSync = (file,data) => {
  try {
    fs.writeFileSync(file,data);
    console.log('File written successfully');
  } catch (error) {
    console.log("Error writing file: " );
    }    
}   


const appendFileSync = (file,data) => {
  try {
    fs.appendFileSync(file,data);
    console.log('File appended successfully');
  } catch (error) {
    console.log("Error appending to file: " );
    }    
}   
console.log(2);

console.log(3);
appendFileSync('data.txt','Hello World!1');

console.log(4);
writeFileSync('data.txt','Hello World!3');
console.log(5);
readFileSync('data.txt');

console.log(6);



