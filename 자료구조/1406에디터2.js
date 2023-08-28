const input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`.split('\n');

let leftStack = [...input[0]];
let rigthStack = [];
const n = input[1];
const command = input.slice(2);


const solution = () => {
    command.forEach(c => {
        if (c === 'L') {
            const pop = leftStack.pop();
            if (pop) { rigthStack.push(pop); }
        } else if (c === 'D') {
            const pop = rigthStack.pop();
            if (pop) { leftStack.push(pop); }
        } else if (c === 'B') {
            leftStack.pop();
        } else {
            const addChar = c.split(' ')[1];
            leftStack.push(addChar);
        }
    })
    return [...leftStack, ...rigthStack.reverse()].join('');
}

console.log(solution());