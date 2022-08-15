import fs from "fs";
import readline from "readline";
import { Transform } from "stream";

const ACCESS_LOG = "./homework/access.log";

fs.writeFile(
  ACCESS_LOG,
  "access.log is running... \n",
  { encoding: "utf8", flag: "a" },
  (err) => {
    if (err) console.log(err);
  }
);
const requests = [
  '89.123.1.41 - - [25/May/2021:00:07:24 +0000] "POST /baz HTTP/1.1" 200 0 "-" "curl/7.47.0"',
  '34.48.240.111 - - [25/May/2021:00:07:17 +0000] "GET /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"',
  '67.32.32.09 - - [25/May/2021:00:07:17 +0000] "DELETE /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"',
];

for (let i = 0; i < 300; i++) {
  let value = getRandomValue(requests);
  fs.appendFile(ACCESS_LOG, value + "\n", "utf8", (err) => {
    if (err) console.log(err);
  });
}

function getFilesizeInBytes(filename) {
  let stats = fs.statSync(filename);
  let fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

function getRandomValue(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

let size = getFilesizeInBytes(ACCESS_LOG)
console.log(`access.log size is ${size} bytes`);

const readStream = fs.createReadStream(ACCESS_LOG);
const writeStream1 = fs.createWriteStream("./homework/89.123.1.41_requests.log");
const writeStream2 = fs.createWriteStream("./homework/34.48.240.111_requests.log");

const rl = readline.createInterface({
  input: readStream,
  terminal: true,
});

let countSteam1 = 1;
let countSteam2 = 1;

rl.on("line", (line) => {
  
  if (line.includes("89.123.1.41")) {
    writeStream1.write(countSteam1 + ": " + line + "\n");
    countSteam1 ++;
  }
  if (line.includes("34.48.240.111")) {
    writeStream2.write(countSteam2 + ": " + line + "\n");
    countSteam2 ++;
  }
});
