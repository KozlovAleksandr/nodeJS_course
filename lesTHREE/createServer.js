import http from "http"; // встроенный модуль в NODE для создания сервера
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
  //console.log("url", req.url);
  //console.log("method", req.method);
  //console.log("headers", req.headers);
  //res.setHeader("test-header", "test");
  /*
  res.writeHead(200, "NORM", {
    "test-header": "test",
  });

  res.write("hello \n");

  res.end("end");
*/
  /*
  //* 2. Проверям по URL какой проходит запрос
  if (req.url == '/user') {
    res.end('User found')
  } else {
    res.writeHead(404, "User not found", {
        "test-header": "test",
      });
      res.end('User not found')
  }
*/
  //* 3. Проверям запрос по методу запроса
  /*
  if (req.method == 'GET') {
    res.end('Hello GET')
  } else if (req.method == 'POST') {
    res.writeHead(405, "Method not allowed");
      res.end('Method not allowed')
  }
*/
  //* 4. Получения URL запроса
  /*
  if (req.method == "GET") {
    if (req.url) {
      const { query } = url.parse(req.url, true);
      console.log(query);
    }
    res.end(`Hello`);
  } else if (req.method == "POST") {
    res.writeHead(405, "Method not allowed");
    res.end("Method not allowed");
  }
*/
  //* 5. Получение данный при POST запросе
  /*
  if (req.method == "GET") {
    if (req.url) {
      const { query } = url.parse(req.url, true);
      console.log(query);
    }
    res.end(`Hello`);
  } else if (req.method == "POST") {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      console.log(data);

      res.writeHead(200, "OK", {
        "Content-Type": "application/json",
      });
      res.end(data);
    });
  }
  */

  //* 6. Передача html файла

  const file = fs.readFileSync("index.html");

  res.writeHead(200, "OK", {
    //    'Content-type' : 'text/plain'   // предотвращает parse разметки
    "Content-type": "html", // parse разметки
  });
  res.end(file);
});

//server.listen(5555);
server.listen(5555, () =>
  console.log("Server been started http://localhost:5555")
);