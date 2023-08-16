const input = `4 2`.split(' ');
const [N, M] = input.map(el => parseInt(el));

const getPermutation = (arr, n) => {
    const result = [];

    if (n === 1) return arr.map(el => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        // const rest = [...origin.slice(index+1)];
        const permutation = getPermutation(rest, n - 1);
        const attached = permutation.map(el => [fixed, ...el]);
        result.push(...attached);
    })

    return result;
}

const solution = (n, m) => {
    let arr = Array(n).fill(1).map((_, index) => index + 1);
    return getPermutation(arr, m);
}


console.log(solution(N, M));