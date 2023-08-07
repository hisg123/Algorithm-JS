const input = `1
10
13
100
1000
10000
100000
0`.split('\n').map(v => parseInt(v)).slice(0, -1);


const solution = (n) => {
    
    //에라토스테네스의채
    let primeArr = Array(2*n+1).fill(true);

    for (let i = 2; i*i <= 2*n; i++) {
        if (primeArr[i]) {
            for (let j = 2*i; j <= 2*n ; j += i) {
                // console.log(j);
                primeArr[j] = false;
            }
        }
    }

    //index가 n보다 크고 2n보다 작거나 같음, 그리고 v가 true === 소수인 길이
    return primeArr.filter((v, index) => index > n && index <= 2*n && v).length;
}

input.forEach(i => console.log(solution(i)))
