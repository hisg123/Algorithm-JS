const input = `2
1
2`.split('\n').map(Number);

const n = input[0];
const arr = input.slice(1).sort((a, b) => a - b);

const getGcd = (a, b) => b ? getGcd(b, a % b) : a;

const solution = () => {

    let gcd = arr[1] - arr[0];
    for (let i = 2; i < n; i++) {
        gcd = getGcd(arr[i] - arr[i - 1], gcd);
    }

    const result = [];
    for (let i = 2; i * i <= gcd; i++) {
        if (gcd % i === 0) {
            result.push(i);
        }
    }

    if (gcd !== 1) result.push(gcd);
    
    console.log(result.join(' '))
}

solution();

