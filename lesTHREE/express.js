// MongoDB
// Express

import express from "express";
const app = express();

//* 1.
/*
app.get("/", (req, res) => {
  res.send("Hello World");
});
*/

/*
//* 2.
app.get("/hello", (req, res) => {
  res.send("Hello " + req.query.name);
});
*/

/*
//* 3.
app.get("/hello/:id", (req, res) => {
  res.send("Hello " + req.params.id);
});
*/

/*
//* 4.
app.get("/hello", (req, res) => {
  res.send({name : 'Aleksandr'});
  //res.sendFile("express.html", {root: '.'});
  //res.sendStatus(404)
});
*/

//* 5. Роутинг с регулярными выражениями
//app.get("/hel+o/:id", (req, res) => {
//  res.send("Hello one");
//});

//app.get("/hell?o/:id", (req, res) => {
//res.send("Hello two");
//});

//app.get("/hello/(:id)?", (req, res) => {
//  res.send("Hello three");
//});

app.get("/.*/", (req, res) => {
    res.send("Hello four");
  });

app.listen(3000, () =>
  console.log("Server been started http://localhost:3000")
);
