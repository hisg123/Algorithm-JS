// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `4 3
4 7
10 15
2 2
5 1`.split('\n');

const [N, K] = input.shift(0).split(' ').map(n => parseInt(n));
const dict = {}
let max_idx = 1;
//좌표에 따른 얼음 무게 JSON 형식으로 만듬
input.forEach(n => {
    max_idx = Math.max(max_idx, parseInt(n.split(' ')[1]));
    dict[parseInt(n.split(' ')[1])] = parseInt(n.split(' ')[0]);
});

const solution = () => {
    let sum = 0;
    //0~K까지 얼음무게 합 구함
    for (let i = 0; i < K+1; i++) {
        if (dict[i]) {
            sum += dict[i];
        }
    }

    //0~길이 까지 최대 얼음무게 구함
    let max = sum;    
    for (let i = 0; i < max_idx; i++) {
        sum -= dict[i-(K+1)] ? dict[i-(K+1)] : 0;
        sum += dict[i+(K+1)] ? dict[i+(K+1)] : 0;
        max = Math.max(max, sum);
    }
    return max;
}

console.log(solution());
