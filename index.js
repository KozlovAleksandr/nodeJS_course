import fs from "fs";
import { Transform } from 'stream';

const ACCESS_LOG = "./access.log";

// ЧТЕНИЕ ФАЙЛА

//const data = fs.readFileSync('./access.log', {encoding: 'utf8'});
//console.log(data);

//fs.promises.readFile(ACCESS_LOG, 'utf8').then(console.log)

//fs.readFile(ACCESS_LOG, "utf8", (err, data) => {
//  console.log(data);
//});

// ЗАПИСЬ В ФАЙЛ

const requests = [
  '127.0.0.1 - - [25/May/2021:00:07:24 +0000] "POST /baz HTTP/1.1" 200 0 "-" "curl/7.47.0"',
  '127.0.0.1 - - [25/May/2021:00:07:17 +0000] "GET /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"',
];

//fs.writeFile(ACCESS_LOG, requests[0] + '\n', {encoding: 'utf8' , flag: 'a'}, (err) => {
//    if(err) console.log(err)
//})

//fs.appendFile(ACCESS_LOG, requests[1] + '\n', 'utf8', (err) => {
//    if(err) console.log(err)
//})

// ЧТЕНИЕ С ПОМОЩЬЮ stream

// fs.ReadStream() // class

// fs.createReadStream()

// const readStream = fs.createReadStream(ACCESS_LOG, {
//   encoding: 'utf8',
//   // autoClose
//   // start
//   // end
//   highWaterMark: 32,
// });

// readStream.on('data', (chunk) => {
//   console.log('chunk:', chunk)
// })

// end, error,

// ЗАПИСЬ С ПОМОЩЬЮ stream

// const writeStream = fs.createWriteStream(
//   ACCESS_LOG,
//   {
//     encoding: 'utf8',
//     flags: 'a'
//   }
// )

// requests.forEach((logString) => {
//   writeStream.write(logString + '\n')
// })

// writeStream.end()

// СИТУАЦИЯ. Скрыть ip если не проплачены (payedAccount)

const payedAccount = false;

const readStream = fs.createReadStream(ACCESS_LOG)

const tStream = new Transform({
  transform(chunk, enconfig, callback) {
    if(!payedAccount) {
      const transformed = chunk.toString().replace(/\d+\.\d+\.\d+\.\d+/g, '[Hidden IP]')
      this.push(transformed)
    } else {
      this.push(chunk)
    }

    callback()
  }
})

readStream.pipe(tStream).pipe(process.stdout)

// 1-05-00