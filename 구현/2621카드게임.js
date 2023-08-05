const input =
// `Y 4
// Y 3 
// Y 2
// Y 5
// Y 6`

// `B 3
// B 7
// R 1
// B 2
// Y 7`

// `B 3
// R 3
// B 7
// Y 3
// G 3`

//     `R 5
// Y 5
// G 7
// B 5
// Y 7`

// `Y 3
// Y 4
// Y 8
// Y 6
// Y 7`

// `R 7
// R 8 
// G 9
// Y 6
// B 5`

// `R 7
// Y 7
// R 2 
// G 7
// R 5`

// `R 5
// Y 5
// Y 4
// G 9
// B 4`

`R 5
Y 2
B 5
B 3
G 4`

// `R 1
// R 2
// B 4
// B 8
// Y 5`
        .split('\n').map(card => card.split(' ')).sort((a, b) => parseInt(a[1]) - parseInt(b[1]));

const countSame = (arr) => {
    const lengthGap = arr.length - Array.from(new Set(arr)).length;
    return lengthGap === 0 ? 0 : lengthGap + 1;
}

const countSameDetail = (arr) => {
    const count = [];
    for (let i = 0; i <= parseInt(arr[arr.length - 1]); i++) {
        count[i] = 0
    }
    arr.forEach(a => {
        count[a] += 1;
    })
    return count;
}

const countSeq = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i + 1]) !== parseInt(arr[i]) + 1) {
            break;
        }
        count += 1;
    }
    return count === 0 ? 0 : count + 1;
}

const isThereCount = (arr, count) => {
    return countSameDetail(arr).find(v => v === count) !== undefined
}


const solution = (arr) => {
    const cardArr = arr.map(a => a[0]);
    const numberArr = arr.map(a => a[1]);
    const score = parseInt(numberArr[numberArr.length - 1]);


    let max = score + 100;

    if (countSame(cardArr) === 5 && countSeq(numberArr) === 5) {
        max = Math.max(score + 900, max);
    }

    if (isThereCount(numberArr, 4)) {
        max = Math.max(countSameDetail(numberArr).indexOf(4) + 1 + 800, max);
    }

    if (isThereCount(numberArr, 3) && isThereCount(numberArr, 2)) {
        max = Math.max((countSameDetail(numberArr).indexOf(3)) * 10 + countSameDetail(numberArr).indexOf(2) + 700, max);
    }

    if (countSame(cardArr) === 5) {
        max = Math.max(score + 600, max);
    }

    if (countSeq(numberArr) === 5) {
        max = Math.max(score + 500, max);
    }

    if (isThereCount(numberArr, 3)) {
        max = Math.max(score + 400, max);
    }

    if (countSameDetail(numberArr).filter(v => v === 2).length === 2) {
        const [smaller, larger] = countSameDetail(numberArr).map((v, index) => {
            if (v === 2) return index;
        }).filter(v => v !== undefined);
        max = Math.max(larger * 10 + smaller + 300, max);
    }

    if (isThereCount(numberArr, 2)) {
        max = Math.max(score + 200, max);
    }

    return max;
}


console.log(solution(input));