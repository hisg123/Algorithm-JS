const [N, ...arr] = `5
5
17
23
14
83`.split('\n').map(Number);
arr.sort((a, b) => a - b);

const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

const solution = () => {

    let gcd = arr[1] - arr[0];
    for (let i = 1; i < N; i++) {
        gcd = getGcd(arr[i + 1] - arr[i], gcd);
    }

    const result = [];
    for (let i = 2; i <= gcd; i++) {
        if (gcd % i === 0) result.push(i);
    }

    return result.join(' ');
}

console.log(solution());