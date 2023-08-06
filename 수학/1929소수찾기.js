const input = `3 16`;

const [M, N] = input.split(' ').map(v => parseInt(v));

const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const solution = (m, n) => {
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

solution(M, N);

