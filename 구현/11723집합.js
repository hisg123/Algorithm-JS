const input = `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1`.split('\n');

const n = Number(input[0]);
input.shift();
const commands = input.map(element => element.split(' '));

class MySet {
    constructor() {
        this.storage = {};
    }

    add(element) {
        if (this.storage[element] === undefined) {
            this.storage[element] = element;
        }
    }

    remove(element) {
        delete this.storage[element];
    }

    check(element) {
        return this.storage[element] ? 1 : 0;
    }

    toggle(element) {
        this.storage[element] ? delete this.storage[element] : this.storage[element] = element;
    }

    all() {
        this.storage = {};
        for (let i = 0; i < 20; i++) {
            this.storage[i + 1] = i + 1;
        }
    }

    empty() {
        this.storage = {};
    }
}

const solution = () => {
    const mySet = new MySet();
    let answer = ``;

    for (let i = 0; i < n; i++) {
        const command = commands[i][0];
        const num = Number(commands[i][1]);

        if (command === 'add') mySet.add(num);
        else if (command === 'check') answer += mySet.check(num) + '\n';
        else if (command === 'remove') mySet.remove(num);
        else if (command === 'toggle') mySet.toggle(num);
        else if (command === 'all') mySet.all();
        else if (command === 'empty') mySet.empty();

    }

    console.log(answer);
}

solution();