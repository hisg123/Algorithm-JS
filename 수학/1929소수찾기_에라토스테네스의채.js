const input = `3 16`.split(' ');
const [M, N] = input.map(v => parseInt(v));

const solution = (m, n) => {
    let primeArr = Array(n + 1).fill(true);

    for (let i = 2; i * i <= n; i++) {
        if (primeArr[i]) {
            for (let j = i * i; j <= n; j += i) {
                primeArr[j] = false;
            }
        }
    }


    for (let i = m; i <= primeArr.length; i++) {
        if (i !== 1 && primeArr[i]) {
            console.log(i);
        }
    }
}

solution(M, N);
