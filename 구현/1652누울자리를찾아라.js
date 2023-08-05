const input = `5
....X
..XX.
.....
.XX..
X....`.split('\n');

const N = input.shift();
const arr = input;

const calcRoom = (arr) => {
    return arr.map(a => a.split('X')).flat().filter(v => v.length >= 2).length;
}

const solution = (n, arr) => {

    const arrY = Array(parseInt(n)).fill('');
    for (let i = 0; i < parseInt(n); i++) {
        for (let j = 0; j < parseInt(n); j++) {
            arrY[i] += [...arr][j][i];
        }
    }

    return `${calcRoom(arr)} ${calcRoom(arrY)}`;
}

console.log(solution(parseInt(N), arr));