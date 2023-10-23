const input = `5
ABCDE
BCDEF
ABCDA
BAAAA
ACAAA`.split('\n')

const n = Number(input[0]);
const arr = input.slice(1);

const sumOnlyNumber = (arr) => {
    return [...arr].reduce((acc, cur) => {
        if (!new RegExp('[a-zA-Z]').test(cur)) {
            acc += Number(cur);
        }
        return acc
    }, 0);
}

const solution = () => {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            const aSum = sumOnlyNumber(a);
            const bSum = sumOnlyNumber(b);
            // console.log(a, aSum);
            // console.log(b, bSum);
            if (aSum- bSum === 0) {
                if (a < b) return -1;
                if (a > b) return 1;
                if (a === b) return 0; 
            }
            return aSum - bSum;
        }
    })
    console.log(arr.join('\n'));
}

solution();