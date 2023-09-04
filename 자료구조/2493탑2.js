const input = `5
6 9 5 7 4`.split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const getLast = (arr) => arr[arr.length - 1];

const solution = () => {
    const answer = new Array(n).fill(0);
    const indexStack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (indexStack.length !== 0 && arr[getLast(indexStack)] < arr[i]) {
            console.log(answer); 
            answer[getLast(indexStack)] = i + 1;
            indexStack.pop();
        }
        indexStack.push(i);
    }
    return answer.join(' ');
}

console.log(solution());