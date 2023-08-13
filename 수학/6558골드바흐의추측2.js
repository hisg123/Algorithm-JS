const temp = `42
0`.split('\n').slice(0, -1)

if (temp[0] === '') { return; }
const input = temp.map(el => parseInt(el));

const max = input.reduce((cur, acc) => Math.max(cur, acc));

const getPrime = (n) => {
    const primArr = Array(n + 1).fill(true);
    for (let i = 2; i * i <= n; i++) {
        if (primArr[i]) {
            for (let j = i * i; j <= n; j += i) {
                primArr[j] = false;
            }
        }
    }
    return primArr;
}

const getMaxDiffCombination = (arr, n) => {
    for (let i = 3; i <= n / 2; i += 2) {
        if (arr[i] && arr[n - i]) {
            return `${n} = ${i} + ${n - i}`;
        }
    }
    return `Goldbach's conjecture is wrong.`;
}

const solution = (arr) => {
    if (max === NaN) return;
    const primArr = getPrime(max);
    const answer = [];
    arr.forEach(el => {
        answer.push(getMaxDiffCombination(primArr, el));
    })

    console.log(answer.join('\n'));
}

solution(input);