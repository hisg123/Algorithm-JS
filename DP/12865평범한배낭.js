const input = `4 7
6 13
4 8
3 6
5 12`.split('\n')

const [N, W] = input[0].split(' ').map(Number);
input.shift();
const arr = input.map(element => element.split(' ').map(Number));
arr.unshift(null);

const solution = () => {
    const dp = new Array(N+1).fill(null);
    dp.forEach((_, idx) => {
        dp[idx] = new Array(W+1).fill(0);
    })


    for (let i = 1; i <= N; i++) {
        const [weight, value] = arr[i];
        for (let j = 0; j <= W; j++) {
            if (j < weight) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
            }
        }
    }

    console.log(dp[N][W]);
}

solution();