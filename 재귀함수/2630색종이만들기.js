const input = `4
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1`.split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(Number));


const solution = () => {

    let zeroCnt = 0;
    let oneCnt = 0;

    
    let isAllSame = true;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] !== arr[0][0]) {
                isAllSame = false;
                break;
            }
        }
        if (!isAllSame) break;
    }
    if (isAllSame) {
        arr[0][0] ? oneCnt++ : zeroCnt++;
        return [zeroCnt, oneCnt];
    }
    

    const makePaper = (arr, start, len) => {
        let isAllSame = true;
        for (let i = start.y; i < start.y+len; i++) {
            for (let j = start.x; j < start.x + len; j++) {
                if (arr[i][j] !== arr[start.y][start.x]) {
                    isAllSame = false;
                    break;
                }
            }
            if (!isAllSame) break;
        }

        if (isAllSame) {
            arr[start.y][start.x] ? oneCnt++ : zeroCnt++; 
            return;
        } else {
            makePaper(arr, {x: start.x, y: start.y}, len/2);
            makePaper(arr, {x: start.x + len/2, y: start.y}, len/2);
            makePaper(arr, {x: start.x, y: start.y + len/2}, len/2);
            makePaper(arr, {x: start.x + len/2, y: start.y + len/2}, len/2);
        }
    }

    makePaper(arr, {x: 0, y: 0}, N/2);
    makePaper(arr, {x: N/2, y: 0}, N/2);
    makePaper(arr, {x: 0, y: N/2}, N/2);
    makePaper(arr, {x: N/2, y: N/2}, N/2);

    return [zeroCnt, oneCnt];
}

console.log(solution().join('\n'));