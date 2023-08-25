const input = `5
ABC*+DE/-
1
2
3
4
5`.split('\n');


const formula = input[1];
const arr = input.slice(2);

const caculate = (a, b, exp) => {
    return exp === '+' ? a + b :
        exp === '-' ? a - b :
            exp === '/' ? a / b : a * b
}

const solution = () => {
    const seq = [];
    const caculator = formula.split(new RegExp('[A-Z]')).filter(v => v !== '');
    caculator.forEach(el => {
        seq.push(...[...el].reverse());
    })

    let resultFormula = []
    for (let i = 0; i < seq.length; i++) {
        resultFormula.push(parseInt(arr[i]));
        resultFormula.push(seq[i]);
    }
    resultFormula.push(parseInt(arr[arr.length - 1]));
    return resultFormula;
}

console.log(solution());