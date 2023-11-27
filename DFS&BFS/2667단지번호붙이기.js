const [n, ...input] = `7
1110101
0110101
1110101
0000111
0100000
0111110
0111001`.split('\n');

const graph = input.map(el => el.split('').map(Number));
const visited = Array.from({ length: Number(n) }, () => new Array(Number(n)).fill(0));

let count = 0;
const dfs = (x, y) => {
    count++;
    visited[x][y] = 1;

    const move = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let i = 0; i < 4; i++) {
        const [dx, dy] = move[i];
        const ax = x + dx;
        const ay = y + dy;

        if (ax >= 0 && ax < Number(n) && ay >= 0 && ay < Number(n) && visited[ax][ay] === 0 && graph[ax][ay] === 1) {
            dfs(ax, ay);
        }
    }
}

const solution = () => {
    let result = [];
    for (let i = 0; i < Number(n); i++) {
        for (let j = 0; j < Number(n); j++) {
            count = 0;
            if (visited[i][j] === 0 && graph[i][j] === 1) {
                dfs(i, j);
                result.push(count);
            }
        }
    }
    console.log(`${result.length}\n${result.sort((a, b) => a - b).join('\n')}`);
}

solution();