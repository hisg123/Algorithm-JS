const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`.split('\n');

const n = input[0];
const arr = input.slice(1);


const removeFunction = (str) => {
    console.log(str);
    let newStr = str.replace('()', '');
    if (newStr === str) {
        console.log(str, newStr)
        if (newStr === '') return 'YES';
        return 'NO';
    }

    removeFunction(newStr);
    // console.log(newStr, result);
    // return result;
}

const solution = () => {

    const result = [];
    arr.forEach(el => {
        result.push(removeFunction(el));
    })

    return result.join('\n');
}

console.log(solution());