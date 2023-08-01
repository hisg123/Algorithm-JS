const input = `100 2
90 1
70 2`.split('\n');

const [W, N] = input.shift().split(' ');
const arr = input.map(v => v.split(' ')).sort((a, b) =>
    parseInt(b[1]) - parseInt(a[1]));

const solution = (w, n, arr) => {
    let target = w;
    let answer = 0;
    for (let i = 0; i < n; i++) {
        target -= arr[i][0];
        answer += arr[i][1] * arr[i][0];
        if (target <= 0) {
            answer += target * arr[i][1];
            break;
        }
    }
    return answer;
}

console.log(solution(parseInt(W), parseInt(N), arr));