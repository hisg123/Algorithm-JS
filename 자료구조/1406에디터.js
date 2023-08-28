const input = `abcd
3
P x
L
P y`.split('\n');

let stack = [...input[0]];
const n = input[1];
const command = input.slice(2);


const edit = (command, cursorPos, stack) => {
    command.forEach(c => {
        if (c === 'L') {
            if (cursorPos > 0) cursorPos -= 1;
        } else if (c === 'D') {
            if (cursorPos < stack.length) cursorPos += 1;
        } else if (c === 'B') {
            if (cursorPos > 0) {
                stack.splice(cursorPos - 1, 1);
                cursorPos-=1;
            }
        } else {
            const addChar = c.split(' ')[1];
            stack.splice(cursorPos, 0, addChar);
            cursorPos += 1;
        }
    })
    return stack.join('');
}

const solution = () => {
    let cursorPosition = stack.length;
    return edit(command, cursorPosition, stack);
}

console.log(solution());