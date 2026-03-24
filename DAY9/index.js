import http from 'http';
import { register } from './register.js';
import { changePassword } from './changepass.js';
import { login } from './login.js';
import { deleteUser } from './delete.js';
const PORT = 8600;
const FILE = "./User.json";
const server = http.createServer((req, res) => {
    if (req.url === "/register" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async() => {
            try{
            const userDetails = JSON.parse(body);
            console.log(userDetails);
            
            const response =await register(userDetails, FILE);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
        } catch (error) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid JSON data" }));
        }
        });

     } 
     else if (req.url === "/change-password" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });
        req.on("end", async () => {
            try{
            const userDetails = JSON.parse(body);
            const response = await changePassword(userDetails, FILE);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
            }
              catch (error) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid JSON data" }));
        }
        });
    } else if(req.url === "/Login" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });
        req.on("end", async () => {
            try{
            const userDetails = JSON.parse(body);
            const response = await login(userDetails, FILE);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
            }
              catch (error) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid JSON data" }));
        }
        });
    }  else if (req.url === "/delete-User" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });
        req.on("end", async () => {
            try{
                // console.log("inside");
                
            const userDetails = JSON.parse(body);
            // console.log(userDetails);
            
            const response = await deleteUser(userDetails, FILE);
            console.log(response);
            
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
            }
              catch (error) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid JSON data" }));
        }
        });
    }

    
    else {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }


});
server.listen(PORT, () => console.log(`server is live at http://localhost:${PORT}`))