const input = `2 3 2`;
const [K, P, N] = input.split(' ').map(n => parseInt(n));

const solution = (k, p, n) => {
    let sum = BigInt(k);
    for (let i = 0; i < n; i++) {
        sum = (sum * BigInt(p)) % BigInt(1000000007)
    }
    return Number(sum);
}

console.log(solution(K, P, N));

console.log(Number.MAX_SAFE_INTEGER, Math.pow(2,53)-1);
console.log(Number.MIN_SAFE_INTEGER, Math.pow(-2, 53)+1);
