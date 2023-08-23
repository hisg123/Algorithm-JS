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
    while (str.length > 0) {
        let nextLeng = str.replace('()', '').length;
        console.log(str);
        console.log(str.length, nextLeng);
        if (nextLeng === str.length) {
            if (str !== '') return 'NO';
        }
        str = str.replace('()', '');
    }

    return 'YES';
}

const solution = () => {

    const result = [];
    const reg = new RegExp('()');
    arr.forEach(el => {
        result.push(removeFunction(el));
    })

    return result.join('\n');
}

console.log(solution());