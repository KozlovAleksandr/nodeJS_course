import fs from "fs";
//const yargs = require("yargs");
//const readline = require("readline");
//const path = require("path");
import inquirer from "inquirer";

//const [filePath] = process.argv.slice(2);

//* 1.

/*
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
*/

//* 2.
/*
const options = yargs.usage("Usage: -p <path to file>").option("p", {
  alias: "path",
  describe: "Path to file",
  type: "string",
  demandOption: true,
}).argv;

//console.log(options)

fs.readFile(options.p, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
*/

//* 3.1 Диалог. Вопрос - ответ
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
*/
/*
rl.question("Введите путь до файла: ", (filePath) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    rl.close();
  });
});
*/

//* 3.2 Диалог. Два вопроса - два ответа

//! ЧЕРЕЗ callback hell
/*
rl.question("Введите путь до файла: ", (filePath) => {
  rl.question("Введите кодировку файла: ", (encode) => {
    fs.readFile(filePath, encode, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
      rl.close();
    });
  });
});
*/

//! ЧЕРЕЗ  Promise
/*
const question = async (query) =>
  new Promise((resolve, reject) => rl.question(query, resolve));

(async () => {
  const filePath = await question("Введите путь до файла: ");
  const encode = await question("Введите кодировку файла: ");

  fs.readFile(filePath, encode, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
  rl.close();
})();
*/

//* 4. Просмотр файлов в файловой системе

const executioDir = process.cwd();

//! Простотр файлов с директориями
//const list = fs.readdirSync('./')

//! Просмотр файлов без директорий
const fileFilter = (fileDir) => fs.lstatSync(fileDir).isFile();
const list = fs.readdirSync("./").filter(fileFilter);

console.log(list);

inquirer
  .prompt([
    {
      name: "fileName",
      type: "list",
      message: "Выберите файл для чтения",
      choices: list,
    },
  ])
  .then(({ fileName }) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  });
