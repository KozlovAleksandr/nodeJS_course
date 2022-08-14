import http from "http";
import fs from "fs";
import os from "os";

import cluster from "cluster";

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running...`);

  for (let i = 0; i < os.cpus().length; i++) {
    console.log(`Forking process number ${i}`);
    cluster.fork();
  }
} else {
  console.log(`Worker ${process.pid} is running...`);

  const server = http
    .createServer((req, res) => {
      setTimeout(() => {
        const file = fs.readFileSync("index.html");
        //const readStream = fs.createReadStream("index.html");

        res.writeHead(200, "OK", {
          "Content-Type": "text/html",
        });
        console.log(`Send file for ${process.pid}`);

        res.end(file)
        //readStream.pipe(res);
      }, 3000);
    })
    .listen(5555, () =>
      console.log("Server been started http://localhost:5555")
    );
}
