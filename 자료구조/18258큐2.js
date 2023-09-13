class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(item) {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.head.next = this.tail;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size += 1;
    }

    pop() {
        if (this.size > 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this.size -= 1;
            return item;
        } else if (this.size === 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this.tail = newHead;
            this.size -= 1;
            return item;
        } else if (this.size === 1) {
            const item = this.head.item;
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return item;
        } else {
            return -1;
        }
    }

    empty() {
        return this.size === 0 ? 1 : 0;
    }

    getSize() {
        return this.size;
    }

    front() {
        return this.head === null ? -1 : this.head.item;
    }

    back() {
        return this.tail === null ? -1 : this.tail.item;
    }
}


const input = `2
push 99
front`.split('\n');

const n = input[0];
const commandArray = input.slice(1);

const solution = () => {
    const queue = new Queue();
    const answer = [];
    commandArray.forEach(command => {
        if (command === 'front') {
            answer.push(queue.front());
        } else if (command === 'back') {
            answer.push(queue.back());
        } else if (command === 'size') {
            answer.push(queue.getSize());
        } else if (command === 'empty') {
            answer.push(queue.empty());
        } else if (command === 'pop') {
            answer.push(queue.pop());
        } else if (new RegExp('push').test(command)) {
            queue.push(command.split(' ')[1]);
        }
    })
    return answer.join('\n');
}

console.log(solution());