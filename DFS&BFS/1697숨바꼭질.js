const [N, K] = `5 17`.split(' ').map(Number);
const visited = new Array(100100).fill(0);
let cnt = 0;
const bfs = (n) => {
    const queue = [];
    queue.push([n, 0]);
    visited[n] = 1;

    while (queue.length) {
        const [cur, time] = queue.shift();
        if (cur === K) return time;
        const move = [cur - 1, cur + 1, 2 * cur];
        for (let i = 0; i < 3; i++) {
            an = move[i];
            if (visited[an] === 0 && an >= 0 && an <= 100000) {
                visited[an] = 1;
                queue.push([an, time+1]);
            }
        }
    }

}

const solution = () => {
    console.log(bfs(N));
}

solution();