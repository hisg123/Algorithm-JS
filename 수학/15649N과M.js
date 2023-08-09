const input = `4 4`;
const [N, M] = input.split(' ').map(v => parseInt(v));


const getPermutation = (arr, selectNumber) => {
    let result = [];
    if (selectNumber === 1) {
        return arr.map(el => [el]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutation = getPermutation(rest, selectNumber - 1);
        const attached = permutation.map((el) => [fixed, ...el]);
        result.push(...attached);
    })

    return result;
}

const solution = (n, m) => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    getPermutation(arr, m).forEach(el => {
        console.log(el.join(' '));
    })
}


solution(N, M);