// ЧТЕНИЕ ФАЙЛА

import fs from 'fs'

// 1. sync
//const file = fs.readFileSync('index.html');
//console.log(file.toString());

// 2. promises
//fs.promises.readFile('index.html').then(console.log)

// 3. callback
fs.readFile('index.html', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})

