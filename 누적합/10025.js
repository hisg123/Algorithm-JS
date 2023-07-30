// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `4 3
4 7
10 15
2 2
5 1`.split('\n');

const [N, K] = input.shift(0).split(' ').map(n => parseInt(n));
const dict = {}
let max_idx = 1;
input.forEach(n => {
    max_idx = Math.max(max_idx, parseInt(n.split(' ')[1]));
    dict[parseInt(n.split(' ')[1])] = parseInt(n.split(' ')[0]);
});

const solution = () => {
    let sum = 0;
    for (let i = 1; i <= K; i++) {
        if (dict[i]) {
            sum += dict[i];
        }
    }

    let max = sum;    
    for (let i = 1; i <= max_idx-K; i++) {
        sum -= dict[i-(K+1)] ?? 0;
        sum += dict[i+(K+1)] ?? 0;
        max = Math.max(max, sum);
    }
    return max;
}

console.log(solution());
