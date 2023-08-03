const input = require('fs').readFileSync('/dev/stdin').toString().trim()
// const input = `200`;

const solution = (n) => {
    let i = 0;
    while (n > 0) {
        n -= i;
        i += 1;
    }
    return n === 0 ? i - 1 : i - 2;
}

console.log(solution(parseInt(input)));