// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `4 3
4 7
10 15
2 2
5 1`.split('\n');

const [N, K] = input.shift(0).split(' ').map(n => parseInt(n));
const dict = {}
input.forEach(n => {
    dict[parseInt(n.split(' ')[1])] = parseInt(n.split(' ')[0]);
});

const solution = () => {
    console.log(N, K);
    console.log(dict);
    let sum = 0;
    let max_idx = 1;
    for (let i = 1; i <= K; i++) {
        if (dict[i]) {
            max_idx = Math.max(max_idx, i);
            sum += dict[i];
        }
        console.log("🚀 ~ solution ~ max_idx:", max_idx)
    }

    

    let max = sum;
    for (let i = 1; i <= max_idx-K; i++) {
        sum -= dict[i] ?? 0;
        sum += dict[i+K] ?? 0;
        max = Math.max(max, sum);
        console.log(sum);
    }
    return max;
}

console.log(solution());
