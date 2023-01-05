import * as fs from 'node:fs'
import * as http from 'node:http'
import * as url from 'node:url'

//import { setCounter } from `moduleName`

fs.readFile('./txt/start.txt', (err, data1) => {

  fs.readFile(`./txt/${data1}.txt`, (err, data2) => {

    fs.readFile('./txt/append.txt', (err, data3) => {

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, "utf-8", (err) => {
        console.log(`File has been written`)
      });
    });
  });
});

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