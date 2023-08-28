const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const formula = input[1];
const arr = input.slice(2);

const caculate = (a, b, exp) => {
    a = Number(a);
    b = Number(b);
    return exp === '+' ? a + b :
        exp === '-' ? a - b :
            exp === '/' ? a / b : a * b
}

const getABCD = (arr) => {
    const abcdDict = {};
    arr.forEach((el, index) => {
        abcdDict[String.fromCharCode('A'.charCodeAt() + index)] = el;
    })
    return abcdDict;
}

const solution = () => {

    const abcdDict = getABCD(arr);
    let actualFormula = [...formula].map(el => {
        if (el.match(new RegExp('[A-Z]'))) {
            el = abcdDict[el];
        }
        return el;
    })

    const result = [];
    for (let i = 0; i < actualFormula.length; i++) {
        if (actualFormula[i].match(new RegExp('[0-9]'))) {
            result.push(actualFormula[i]);
        } else {
            let b = result.pop();
            let a = result.pop();
            let calcRes = caculate(a, b, actualFormula[i]);
            result.push(calcRes);
        }
    }

    return result[0].toFixed(2).toString();
}

console.log(solution());