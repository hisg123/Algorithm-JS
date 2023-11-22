const input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`.split('\n');

const [M, N, K] = input.shift().split(' ').map(Number);

let graph = Array.from(Array(M), () => Array(N).fill(0));
let visited = Array.from(Array(M), () => Array(N).fill(0));

for (let i = 0; i < K; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            graph[y][x] = 1;
        }
    }
}

let count = 0;
const dfs = (x, y) => {
    count++;
    visited[x][y] = 1;

    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = 0; i < 4; i++) {
        const [dx, dy] = move[i];

        let ax = x + dx;
        let ay = y + dy;

        if (ax >= 0 && ay >= 0 && ax < M && ay < N) {
            if (graph[ax][ay] === 0 && visited[ax][ay] === 0) {
                dfs(ax, ay);
            }
        }
    }
}


let result = [];
for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        count = 0;
        if (graph[i][j] === 0 && visited[i][j] === 0) {
            dfs(i, j);
            result.push(count);
        }
    }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join(' '));
