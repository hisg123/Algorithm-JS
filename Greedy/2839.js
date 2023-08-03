// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `11`;

const solution = (n) => {
    let answer = 0;
    while (n !== 0) {
        if (n % 5 === 0) {
            return answer + n / 5;
        }
        n -= 3; 
        answer += 1;
        if (n < 0) return -1;
    }

    return answer;
}

console.log(solution(parseInt(input)));