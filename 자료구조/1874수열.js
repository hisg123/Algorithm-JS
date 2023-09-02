const input = `8
4
3
6
8
7
5
2
1`.split('\n').map(Number);

const n = input[0];
const arr = input.slice(1);

const solution = () => {
    let i = 1;
    const stack = [];
    const answer = [];
    for (let el of arr) {
        while (i <= el) {
            stack.push(i);
            answer.push('+');
            i++;
        }

        if (el === stack.pop()) {
            answer.push('-');
        } else {
            return 'NO';
        }
    }
    return answer.join('\n');
}

console.log(solution());