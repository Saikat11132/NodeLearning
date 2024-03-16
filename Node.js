
const fs = require('fs');
const http = require('http')
const data = require('./data')
const express = require('express')
const path = require('path')
const app = express();

// console.log("==> ",__dirname)
// http.createServer((req,res)=>{
//     // res.writeHead(200,{'Content-Type':'application/json'})
//     // res.write(JSON.stringify(data));
//     // res.end()
// }).listen(4500)

// app.get("",(req,res)=>{
//     console.log("req => ", req.query.name)
//     res.send("<h1>Hello World 2</h1>")
// })

const publicPath = path.join(__dirname,'public')

app.use(express.static(publicPath))
app.set('view engine','ejs')

app.get("",(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get("/profile",(req,res)=>{
    const user={
        name:"Saikat Ruj",
        Roll:1,
        Languages:["C++","Java","javasricpt"]
    }
     res.render('profile',{user})
})

app.get("/about",(req,res)=>{
    res.render('about',{title:'About Me'});
})

app.listen(4500)

console.log("server is running at port localhost:4500");
