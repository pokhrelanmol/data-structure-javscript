// queue is a data structure that can be used to store and manipulate data in a FIFO (first in first out) fashion.
class Queue {
    constructor() {
        this.items = [1, 2, 3];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items);
    }
}
const queue = new Queue();
