// const input = `102`;
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const sortString = (str) => {
    return [...str].sort((a, b) => parseInt(b) - parseInt(a)).join('');
}

const solution = (n) => {
    let num = sortString(n);

    while (num !== 0) {
        if (num % 30 === 0) {
            if (sortString(num) === sortString(n)) return num;
        }
        num -= 1;
    }
    return -1;
}

console.log(solution(input));