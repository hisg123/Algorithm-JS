const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let arr = [];
let inputCount = 0;
rl.on("line", (line) => {
    /*입력 받는 값을 처리하는 코드*/
    input.push(line);
    if (inputCount === 1) {
        arr = input[1].split(' ');
        rl.close();
    }
    inputCount++;
});

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


rl.on("close", () => {
    /*입력이 끝나고 실행할 코드*/
    console.log(solution());
    process.exit();
});