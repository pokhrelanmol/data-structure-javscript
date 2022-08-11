const linkedList = require("./linkedListWithTail");

class Stack {
    constructor() {
        this.linkedList = new linkedList();
    }
    push(value) {
        this.linkedList.append(value);
    }
    pop() {
        return this.linkedList.removeFromFront();
    }
    peek() {
        return this.linkedList.head.value;
    }
    isEmpty() {
        return this.linkedList.isEmpty();
    }
    getSize() {
        return this.linkedList.getSize();
    }
    print() {
        this.linkedList.print();
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
