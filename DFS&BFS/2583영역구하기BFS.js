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

const bfs = (x, y) => {
    let count = 1;
    let queueIndex = 0;
    const queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;

    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queueIndex < queue.length) {
        const [qx, qy] = queue[queueIndex];
        for (let i = 0; i < 4; i++) {
            const [dx, dy] = move[i];

            let ax = qx + dx;
            let ay = qy + dy;

            if (ax >= 0 && ay >= 0 && ax < M && ay < N) {
                if (graph[ax][ay] === 0 && visited[ax][ay] === 0) {
                    queue.push([ax, ay]);
                    visited[ax][ay] = 1;
                    count++;
                }
            }
        }
        queueIndex++;
    }

    result.push(count);
}


let result = [];
for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 0 && visited[i][j] === 0) {
            bfs(i, j);
        }
    }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join(' '));
