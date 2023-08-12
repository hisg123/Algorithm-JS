const input = `11 4 2
2 1
2 3
2 11
2 5`.split('\n');

const [N, M, V] = input[0].split(' ').map(el => parseInt(el))

//node 만들기
const nodeArr = {};
for (let i = 1; i <= N; i++) {
    nodeArr[i] = [];
}
input.slice(1).forEach(el => {
    const [v1, v2] = el.split(' ').map(n => parseInt(n));
    nodeArr[v2].push(v1);
    nodeArr[v1].push(v2);
})

const dfs = (start, node) => {
    const visited = [start];
    let stack = [...node[start].sort((a,b) => b-a)];

    while (stack.length !== 0) {
        const next = stack.pop();
        if (visited.indexOf(next) === -1) {
            stack = [...stack, ...node[next].sort((a,b) => b-a)];
            visited.push(next);
        }
    }
    return visited.join(' ');
}

const bfs = (start, node) => {
    const visited = [start];
    let queue = [...node[start].sort((a,b) => a-b)];
    while (queue.length !== 0) {
        const next = queue.shift();
        if (visited.indexOf(next) === -1) {
            queue = [...queue, ...node[next].sort((a,b) => a-b)];
            visited.push(next);
        }
    }
    return visited.join(' ');
}

console.log(dfs(V, nodeArr));
console.log(bfs(V, nodeArr));