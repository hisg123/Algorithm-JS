const input = `7 3
1231234`.split('\n');

const [n, k] = input[0].split(' ').map(Number);
const numArr = input[1].split('').map(Number);

const solution = () => {
    const stack = [];
    let count = k;

    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && count > 0 && numArr[i] > stack[stack.length - 1]) {
            stack.pop();
            count--;
        }
        stack.push(numArr[i]);
    }

    while(count > 0) {
        stack.pop();
        count--;
    }

    return stack.join('');
}

console.log(solution());
