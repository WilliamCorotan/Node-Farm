import * as fs from 'node:fs'

fs.readFile('./txt/start.txt', (err, data1) => {

  fs.readFile(`./txt/${data1}.txt`, (err, data2) => {

    fs.readFile('./txt/append.txt', (err, data3) => {

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, "utf-8", (err) => {
        console.log(`File has been written`)
      });
    });
  });
});
