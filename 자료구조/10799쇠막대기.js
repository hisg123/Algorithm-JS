const input = `(((()(()()))(())()))(()())`;


const solution = () => {
    const arr = [...input.replaceAll('()', '*')];
    let answer = 0;
    const stack = [];
    arr.forEach(el => {
        if (el === '(') {
            stack.push(el);
        }

        if (el === '*') {
            answer += stack.length;
        }

        if (el === ')') {
            stack.pop();
            answer++;
        }
        console.log(el, stack, answer);
    })
    return answer;
}

console.log(solution());