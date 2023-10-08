const input = `18
1
-1
0
0
0
1
1
-1
-1
2
-2
0
0
0
0
0
0
0`.split('\n').map(Number);

const n = input[0];
const numArr = input.slice(1);

class Heap {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
        this.size = 0;
        this.nextIndex = 0;
        this.nextValue = Number.MAX_SAFE_INTEGER;
        this.smallestIndex = 0;
        this.smallestValue = Number.MAX_SAFE_INTEGER;
    }

    push(item) {
        console.log(this.storage);
        this.storage[this.tail] = item;
        const isSmallerComparedWithAbs = Math.abs(item) < Math.abs(this.smallestValue);
        const isSmaller = Math.abs(item) === Math.abs(this.smallestValue) && item < this.smallestValue;
        if (isSmallerComparedWithAbs|| isSmaller) {
            this.nextValue = item;
            this.nextIndex = this.tail;
            this.smallestValue = item;
            this.smallestIndex = this.tail;
        } 
        this.tail++;
        this.size++;
    }

    pop() {
        if (this.size === 0) return 0;
        const returnValue = this.storage[this.smallestIndex];
        delete this.storage[this.smallestIndex];
        this.size--;
        this.smallestIndex = this.nextIndex;
        this.smallestValue = this.nextValue;
        return returnValue;
    }
    
}

const solution = () => {
    const heap = new Heap();
    let answer = '';
    numArr.forEach(el => {
        if (el !== 0) {
            heap.push(el);
        } else {
            answer += heap.pop() + '\n';
        }
    })
    return answer;
}

console.log(solution());
