const input = `3
8
10
16`.split('\n').slice(1).map(el => parseInt(el));

const max = input.reduce((cur, acc) => Math.max(cur, acc));

const getEratos = (n) => {

    const primeArr = Array(n + 1).fill(true);

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primeArr[i]) {
            for (let j = i * i; j <= n; j += i) {
                primeArr[j] = false;
            }
        }
    }

    primeArr[0] = false;
    primeArr[1] = false;

    return primeArr;
}

const getMinDiff = (arr, n) => {
    // console.log(arr);
    for (let i = parseInt(n / 2) + 1; i >= 2; i--) {
        if (arr[i] && arr[n - i]) {
            return i < n - i ? `${i} ${n - i}` : `${n - i} ${i}`;
        }
    }
}

const solution = (arr) => {
    const primeArr = getEratos(max);
    const result = arr.map(el => getMinDiff(primeArr, el));
    return result.join('\n');
}

console.log(solution(input));