const http = require("http");

const fs = require('fs')

const PORT = 2000;
const hostname = "localhost";

const home =fs.readFileSync("./index.html","utf-8");
const server = http.createServer((req, res) => {
    if(req.url==='/'){
        return res.end(home);
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end("<h1>About</h1>");
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
       return res.end("<h2>Contact</h2>");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("<h1>Not Found</h1>");
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`);
});
