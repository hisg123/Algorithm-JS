const input = 
`3
8
10
16`.split('\n').slice(1).map(el => parseInt(el));

const solution = (n) => {

    const result = [];

    //에라토스테네스로 소수 거르기
    const primeArr = Array(n).fill(true);

    for (let i = 2; i * i <= n; i++) {
        if (primeArr) {
            for (let j = i * i; j <= n; j += i) {
                primeArr[j] = false;
            }
        }
    }

    for (let i = 2; i <= primeArr.length; i++) {
        if (primeArr[i]) result.push(i);
    }

    let min = Number.MAX_SAFE_INTEGER;
    let comb = [];
    //차가 가장 작은 조합 구하기
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[i] + result[j] === n && Math.abs(result[i]-result[j]) < min) {
                comb = [result[i], result[j]];
                min = Math.abs(result[i]-result[j]);
            }
        }
    }


    //

    return comb.join(' ');
}

// console.log(input);
input.forEach(el => console.log(solution(el)));
