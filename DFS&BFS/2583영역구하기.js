const input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`.split('\n');

const [M, N, K] = input.shift().split(' ').map(Number);

let graph, visited = '';
let depth = 1;

const dfs = (x, y) => {
    console.log(x, y);
    visited[x][y] = 1;

    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = 0; i < 4; i++) {
        const [dx, dy] = move[i];

        let ax = x + dy;
        let ay = y + dx;

        if (ax > 0 && ay > 0 && ax < N && ay < M) {
            if (graph[ay][ax] === 0 && visited[ay][ax] === 0) {
                dfs(ay, ax);
                depth ++;
            }
        }
    }
}

const solution = () => {
    graph = Array.from(Array(M), () => Array(N).fill(0));
    visited = Array.from(Array(M), () => Array(N).fill(0));

    for (let i = 0; i < K; i++) {
        const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
        for (let y = y1; y < y2; y++) {
            for (let x = x1; x < x2; x++) {
                graph[y][x] = 1;
            }
        }
    }

    console.log("🚀 ~ solution ~ graph:", graph)

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] !== 1 && visited[i][j] === 0) {
                dfs(i, j);
            }
        }
    }

    console.log(depth);
}

solution();