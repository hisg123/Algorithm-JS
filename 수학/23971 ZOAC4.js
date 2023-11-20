const [H, W, N, M] = `5 4 1 1`.split(' ').map(Number);

const solution = () => {
    let answer = 0;
    for (let i = 0; i < H; i += N+1) {
        for (let j = 0; j < W; j += M+1) {
            answer++;
        }
    }
    console.log(answer);
}

solution();