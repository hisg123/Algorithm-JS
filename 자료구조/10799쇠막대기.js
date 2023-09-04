const input = '()(((()())(())()))(())'


const solution = () => {
    const newInput = input.split('()').join('*');
    const stack = [];
    let answer = 0;

    [...newInput].forEach(el => {
        if (el === '(') {
            stack.push(el);
        }

        if (el === ')') {
            stack.pop();
            answer += 1;
        }

        if (el === '*') {
            answer += stack.length;
        }
    })

    return answer;
}


console.log(solution());