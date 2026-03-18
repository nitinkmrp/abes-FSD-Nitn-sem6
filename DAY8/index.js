import http from 'http';
import { userLogin } from "../DAY6/controller/login.js";
const PORT = 8800;

const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico")return;
        if(req.url === "/login" && req.method === "POST"){
            let body = "";
            req.on("data",(datachunk)=>{
                body += datachunk.toString();
            });
          req.on("end",async()=>{
            
            const UserData = JSON.parse(body);
            const response= await userLogin(UserData,"./user.json");
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(response));    
        })
          }
        else {
            res.writeHead(500,{"Content-Type":"application/json"});
            res.end(JSON.stringify({error: "Internal Server Error"})); 
        }
    









    // switch(req.url){
    // case "/":     
    // res.end(  "server is live" );
    // break;
    // case "/login":
    //     res.end("this is about page");
    //     break;
    // case "/register":
    //     res.end("this is register page");
    //     break;
    // default:
    //     res.end("404 not found");
    // }

    

    
});
server.listen(PORT, () => console.log(`server is live at http://localhost:${PORT}`));