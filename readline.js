import colors from "colors";
import readline from "readline";

const args = process.argv.slice(2);
const [name, country] = args;

//console.log(colors.green('hello ' + name))
//console.log(colors.red('from ' + country))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});
*/

rl.on("line", (input) => {
  if (input === "exit") {
    rl.close();
  } else {
    console.log(colors.green(`Ответ: ${input}`));
  }
});
