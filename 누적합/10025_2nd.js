// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `4 3
4 7
10 15
2 2
5 1`.split('\n');

const [N, K] = input.shift().split(' ');
const arrDict = {};
const arr = input.map(v => v.split(' '));
let max_pos = 0;

//position별로 ice value를 dict로
arr.forEach(v => {
    arrDict[v[1]] = parseInt(v[0]);
    max_pos = Math.max(max_pos, v[1]);
})

const solution = (arrDict, n, k) => {
    let sum = 0;
    //처음에는 0~k만큼 초기값을 구해둔다.
    for (let i = 0; i < k + 1; i++) {
        sum += arrDict[i] ? arrDict[i] : 0;
    }

    //가장 큰 position까지 
    // i-(k+1)의 얼음 값 빼고,
    // i+(k+1)의 얼음 값 더한다.
    // 그렇게 max 값 계속 비교
    let max = sum;
    for (let i = 0; i < max_pos + 1; i++) {
        sum -= arrDict[i - k - 1] ? arrDict[i - k - 1] : 0;
        sum += arrDict[i + k + 1] ? arrDict[i + k + 1] : 0;
        max = Math.max(max, sum);
    }
    return max;
}


console.log(solution(arrDict, N, parseInt(K)))

