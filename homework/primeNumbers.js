import colors from "colors";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const primeNumbers = [];
const range = []

function getPrimeNumbers(range) {
  
  let [start, end] = range.sort();

  for (let i = start; i <= end; i++) {
    for (let j = start; j < i; j++) {
      if (i % j === 0) {
        break;
      } else {
        primeNumbers.push(i);
        break;
      }
    }
  }
  return primeNumbers;
}


function showNumbers(primeNumbers) {
  if (!primeNumbers.length) {
    console.log(colors.red("В заданном диапозоне простые числа остутствуют"));
  } else {
    for (let i = 0; i < primeNumbers.length; i += 3) {
      primeNumbers[i] ? console.log(colors.red(primeNumbers[i])) : '';
      primeNumbers[i+1] ? console.log(colors.yellow(primeNumbers[i+1])) : '';
      primeNumbers[i+2] ? console.log(colors.green(primeNumbers[i+2])) : '';
    }
  }
}

(function() {
  console.log(colors.blue("Введите начальное и конечное значение диапозона для простых чисел"));
  rl.on("line", (input) => {
    if (input === "exit") {
      rl.close();
    } else {
      const startNum = (Number(input));
      if (isNaN(startNum)) {
          console.log(colors.red("Введено не число"));
        } else {
          range.push(input);
          if (range.length == 2) {
            showNumbers(getPrimeNumbers(range))
            rl.close();  
          }
        }
    }
  });
}())
