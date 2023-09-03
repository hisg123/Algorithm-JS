const input = `30
1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1 2 3 4 5 6 7 8 9 10 10 10`.split('\n');

const arr = input[1].split(' ').map(Number);

const solution = () => {
    const answer = [];

    if (arr.length === 1) { return 0; }

    while (arr.length > 0) {
        let curTemp = arr.pop();
        const index = arr.findLastIndex(el => el > curTemp);
        answer.push(index === -1 ? 0 : index + 1);
    }

    return answer.reverse().join(' ');
};

console.log(solution());