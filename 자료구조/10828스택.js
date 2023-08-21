const input = `7
pop
top
push 123
top
pop
top
pop`.split('\n');

const N = parseInt(input[0]);
const commandArr = input.slice(1);

const solution = () => {
    const stack = [];
    let result = [];
    for (let i = 0; i < N; i++) {
        const [command, number] = commandArr[i].split(' ');
        if (command === 'push') {
            stack.push(parseInt(number));
        } else if (command === 'pop') {
            const pop = stack.pop();
            result.push(pop ? pop : -1);
        } else if (command === 'size') {
            result.push(stack.length);
        } else if (command === 'empty') {
            result.push(stack.length === 0 ? 1 : 0);
        } else if (command === 'top') {
            result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        }
    }

    return result.join('\n')
}

console.log(solution());