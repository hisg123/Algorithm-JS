const input = `5
ABC*+DE/-
1
2
3
4
5`.split('\n');

let n = parseInt(input[0]);
let calculateExpression = input[1];
const numberArray = input.slice(2).map(Number);

const getABCDdict = (arr) => {
    const dict = {};
    arr.forEach((el, index) => {
        dict[String.fromCharCode('A'.charCodeAt() + (index))] = parseInt(el);
    });
    return dict;
}

const calculate = (a, b, calc) => {
    return calc === '*' ? a * b :
        calc === '+' ? a + b :
            calc === '-' ? a - b : a / b;
}

const solution = () => {
    // 1. number array ABCD를 매칭
    const abcdDict = getABCDdict(numberArray);

    // 2. calculate expression에 abcd 실제 값 매칭
    let realValueExpression = [...calculateExpression].map(el => el.match(new RegExp('[A-Z]')) ? abcdDict[el] : el);
    
    // 3. 후치연산 시작
    // 숫자 push 
    // 연산자 나오면 숫자 2개 pop, 계산
    //  계산은 세부함수 => calculate
    const numberStack = [];
    for (let i = 0; i < realValueExpression.length; i++) {
        console.log("🚀 ~ solution ~ numberStack:", numberStack)
        if (String(realValueExpression[i]).match(new RegExp('[*,+,/,-]'))) {
            const b = numberStack.pop();
            const a = numberStack.pop();
            numberStack.push(calculate(a, b, realValueExpression[i]));
        } else {
            numberStack.push(realValueExpression[i]);
        }
    }

    return numberStack[0];
}

console.log(solution());