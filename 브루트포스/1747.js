const input = `31`;

const reverse = (str) => {
    const strArr = [...str];
    const result = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        result.push(strArr[i]);
    }
    return result.join('');
}

const isPrime = (num) => {
    if (num === 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const solution = (num) => {
    for (let i = 0; ; i++) {
        if (String(num) === reverse(String(num)) && isPrime(num)) {
            break;
        }   
        num += 1;
    }
    return num;
}

console.log(solution(parseInt(input)));