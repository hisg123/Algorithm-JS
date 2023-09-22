
const input = `4
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]`.split('\n');

const testCase = input[0];
const arr = input.slice(1);

const getCommandResult = ({ commands, len, numArr }) => {
    let reverseFlag = false;
    for (let command of commands) {
        if (command === 'R') {
            reverseFlag = !reverseFlag;
        } else if (command === 'D') {
            if (numArr.length === 0) return 'error';
            reverseFlag ? numArr.pop() : numArr.shift();
        } else {
            throw new Error("커맨드 값이 잘못 되었습니다.");
        }
    }
    return JSON.stringify(reverseFlag ? numArr.reverse() : numArr);
}

const solution = () => {
    let answer = '';
    for (let i = 0; i < arr.length - 2; i += 3) {
        answer += getCommandResult({ commands: [...arr[i]], len: arr[i + 1], numArr: JSON.parse(arr[i + 2]) }) + '\n';
    }
    return answer;
}

console.log(solution());