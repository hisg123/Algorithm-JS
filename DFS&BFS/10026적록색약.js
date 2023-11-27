const [N, ...input] = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`.split('\n')

let graph = input.map(el => el.split(''));
const graphRB = input.map(el => {
    return el.replaceAll('R','G').split('')
});
let visited = Array.from(Array(Number(N)), () => Array(Number(N)).fill(0));

const dfs = (x, y) => {
    // console.log(x, y, graph[x][y]);
    visited[x][y] = 1;

    const move = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let i = 0; i < 4; i++) {
        const [dx, dy] = move[i];
        const ax = x + dx;
        const ay = y + dy;

        if (ax >= 0 && ax < N && ay >= 0 && ay < N) {
            if (visited[ax][ay] === 0 && graph[ax][ay] === graph[x][y]) {
                dfs(ax, ay);
            }
        }
    }
}

const solution = () => {
    let cnt = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (visited[i][j] === 0) {
                dfs(i, j);
                cnt++;
            }
        }
    }

    graph = graphRB;
    visited = Array.from(Array(Number(N)), () => Array(Number(N)).fill(0));

    let cntRB = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (visited[i][j] === 0) {
                dfs(i, j);
                cntRB++;
            }
        }
    }

    console.log(`${cnt} ${cntRB}`);
}

solution();