// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = 
`10 2
3 -2 -4 -9 0 3 7 13 8 -3`.split('\n');

const [N, K] = input[0].split(' ').map(element => parseInt(element));
const temperatureArr = input[1].split(' ').map(t => parseInt(t));

const solution = (arr, n, k) => {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    let max = sum;
    for (let i = 0; i < n-k ; i++) {
        sum -= arr[i];
        sum += arr[i+k];
        max = Math.max(max, sum);
    }
    return max;
}

console.log(solution(temperatureArr, N, K));