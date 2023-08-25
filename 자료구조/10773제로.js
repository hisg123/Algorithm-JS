const input = `10
1
3
5
4
0
0
7
0
0
6`.split('\n').map(Number);

const arr = input.slice(1);

const solution = () => {
    const result = [];
    arr.forEach(el => {
        if (el === 0) {
            result.pop();
        } else {
            result.push(el);
        }
    })

    return result.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution())