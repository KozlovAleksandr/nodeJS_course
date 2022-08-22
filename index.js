const fs = require("fs");
const path = require("path");
const readline = require("readline");
const inquirer = require("inquirer");
const colors = require("colors");

const executionDir = process.cwd();
const fileFilter = (fileOrDir) => fs.lstatSync(fileOrDir).isFile();
const list = fs.readdirSync("./").filter(fileFilter);

inquirer
  .prompt([
    {
      name: "fileName",
      type: "list",
      message: colors.red("Выберите файл"),
      choices: list,
    },
  ])
  .then(({ fileName }) => {
    const fullFilePath = path.join(executionDir, fileName);

    fs.readFile(fullFilePath, "utf-8", (err, data) => {
      if (err) console.log(err);
      else console.log(colors.yellow(data));
    });
  });
