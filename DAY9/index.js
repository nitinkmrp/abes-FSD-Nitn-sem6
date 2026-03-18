import http from 'http';
import { register } from './register.js';
const PORT = 8600;
const FILE = "./User.json";
const server = http.createServer((req, res) => {
    if (req.url === "/register" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();

        })
        
        
        req.on("end", async() => {
            const userDetails = JSON.parse(body);
            const response =await register(userDetails, FILE);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
        })
     } 
     else {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }


});
server.listen(PORT, () => console.log(`server is live at http://localhost:${PORT}`))