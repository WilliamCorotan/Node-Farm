//import fs module ni nodeJS
const fs = require('fs')

//nodeJS ay yung backend ng JS, php, python, c#
// method (        path     ,  encoder , callback function(errorMessage, data)) 
fs.readFile(`./txt/start.txt`, `utf-8`, (error,startData)=>{
  // console.log(startData)
  // console.log(typeof startData)

  fs.readFile(`./txt/${startData}.txt`,`utf-8`,function(error, readThisData){
    //console.log(startData==='read-this')
    //console.log(readThisData)
    fs.readFile(`./txt/append.txt`,`utf-8`,(error, appendData)=>{
//      console.log(appendData)
      fs.writeFile(`./txt/final.txt`,`${readThisData}\n\n${appendData}`,`utf-8`,(error)=>{
 //       console.log("File has been written")
      })
    })
  })
})


//creating a web server
const http = require("http")
const url = require("url")
const PORT = 8000

const server = http.createServer((req,res)=>{
  const pathName = req.url
  
  if(pathName=== "/" || pathName === "/home"){
    res.end("Welcome to NodeJS")
  }
  else if(pathName=== "/product"){
    res.end("Welcome to the product page")
  }
  else{
    res.writeHead(404, {
      "Content-type": "text/html",      
      "my-own-header": "hello-world"})
    res.end("<h1> Page not found! </h1>")
  }
})


server.listen(PORT, `127.0.0.1`, ()=>{
  console.log(`listening on port:${PORT}`)
})



















// //  method (        path     ,  encoder, callback function()) 
// fs.readFile(`./txt/start.txt`, `utf-8`, (err, data1) => {
//   console.log(`data1: ${data1}`)
//   console.log(typeof data1)

//   fs.readFile(`./txt/${data1}.txt`, `utf-8`, (err, data2)=> {
//     console.log(`data2: ${data2}`)

//     fs.readFile(`./txt/append.txt`, `utf-8`, function(error, appendData){
      
//       fs.writeFile(`./txt/final.txt`, `${data2}\n\n${appendData}`, `utf-8`,(err)=>{
//         console.log(`File was successfully written`)
//       })
//     })
//   })
// })


























// //creating a web server
// const port = 8000
// const server = http.createServer((req,res)=>{ 
//   const pathName = req.url
//   if(pathName === "/" || pathName === "/overview"){
//     res.end("This is the Overview")
//   }
//   else if(pathName === "/product"){
//     res.end("This is the Product")
//   }
//   else{
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "my-own-header": "hello-world"
//     })
//     res.end("<h1> Page not found! </h1>")
//   }
// })

// server.listen(port, "127.0.0.1", ()=>{
//   console.log(`Listening on ${port}`)
// })