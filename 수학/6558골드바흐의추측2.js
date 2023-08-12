const input = `8
20
42
6
0`.split('\n').slice(0, -1).map(el => parseInt(el));

const solution = (arr) => {
    const max = arr.reduce((el, acc) => Math.max(el, acc));

    //에라토스테네스의 채
    const primeArr = Array(max + 1).fill(true);

    //홀수만 구함
    for (let i = 2; i * i <= max; i++) {
        if (primeArr[i]) {
            for (let j = i * i; j <= max; j += i) {
                primeArr[j] = false;
            }
        }
    }


    arr.forEach(n => {
        //가장 차이가 큰 조합 구하기
        let flag = false;
        for (let i = 3; i < parseInt(n/2)+1 ; i += 2) {
            if (primeArr[i] && primeArr[n - i]) {
                console.log(`${n} = ${i} + ${n - i}`);
                flag = true;
                break;
            }
        }
        if (!flag) console.log(`Goldbach's conjecture is wrong.`);
    })
}

solution(input);