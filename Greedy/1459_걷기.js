const input = `25 18 7 11`;
const [X, Y, W, S] = input.split(' ').map(v => { return parseInt(v)});

const solution = (x, y, w, s) => {
    console.log((x + y) * w);
    console.log(Math.sqrt(x*x+y*y)*s);
    return Math.min((x + y) * w, Math.sqrt(x*x+y*y)*s);
}

console.log(solution(X, Y, W, S))
