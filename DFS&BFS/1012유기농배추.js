const [testCase, ...inputs] = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.split('\n');

let graph, visited, N, M, K, p = 0;

const dfs = (x, y) => {
    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    visited[x][y] = 1;
    for (let i = 0; i < 4; i++) {
        const [dx, dy] = move[i];
        let ax = x + dx;
        let ay = y + dy;

        if ((ax >= 0 && ay >= 0) && (ax < N && ay < M)) {
            if (graph[ax][ay] === 1 && visited[ax][ay] === 0) {
                dfs(ax, ay);
            }
        }
    }
}

const solution = () => {
    for (let i = 0; i < testCase; i++) {
        [N, M, K] = inputs[p].split(' ').map(Number);
        graph = Array.from(Array(N), () => new Array(M).fill(0));
        visited = Array.from(Array(N), () => new Array(M).fill(0));

        let temp = p;
        for (p = temp + 1; p <= K + temp; p++) {
            const [x, y] = inputs[p].split(' ').map(Number);
            graph[x][y] = 1;
        }

        let cnt = 0;
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < M; k++) {
                if (graph[j][k] === 1 && visited[j][k] === 0) {
                    dfs(j, k);
                    cnt++;
                }
            }
        }
        console.log(cnt);
    }
}

solution();