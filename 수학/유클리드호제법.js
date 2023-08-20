
const getGcd = (a, b) => {
    return b ? getGcd(b, a%b) : a;
}

console.log(getGcd(38, 6))