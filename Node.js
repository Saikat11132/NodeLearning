
const fs = require('fs');
const http = require('http')
// console.log("==> ",__dirname)
http.createServer((req,res)=>{
    res.write("<h1>Hello from Node</h1>");
    res.end()
}).listen(4500)