const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, '../Input text/2750.txt')).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
input.sort((a,b) => a-b);

for (let i = 0; i< input.length; i++) {
    console.log(input[i]);
}