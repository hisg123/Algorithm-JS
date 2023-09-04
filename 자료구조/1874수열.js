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
    let index = 1;
    const stack = [];
    const answer = [];
    for (let i = 0; i < arr.length; i++) {

        while (index <= arr[i]) {
            stack.push(index);
            answer.push('+');
            index++;
        }   

        if (stack.pop() !== arr[i]) {
            return 'NO';
        }
        answer.push('-');
    }

    return answer.join('\n');
}

console.log(solution());