const input = `100`;

let procedure = '';
let procedureN = 0;
let result = '';
const hanoi = (num, from, to, other) => {
    if (num === 0) return;
    hanoi(num - 1, from, other, to);
    procedureN += 1;
    procedure += (`${from + 1} ${to + 1}\n`);
    hanoi(num - 1, other, to, from);
}

console.log((2n**(BigInt(input)) -1n).toString());
if (Number(input) > 20) return;
hanoi(Number(input), 0, 2, 1);
console.log(procedure);