// circular queue is a data structure that can be used to store and manipulate data in a FIFO (first in first out) fashion. it is also known as a ring buffer. circular queue is a special case of a queue where the last element is connected to the first element.

class circularQueue {
    constructor(size) {
        this.items = new Array(size);
        this.size = size;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }
    enqueue(item) {
        if (this.isFull()) {
            return "Queue is full";
        }
        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = item;
        this.currentLength++;
        if (this.front === -1) {
            // this will run run when we insert first
            this.front = this.rear;
        }
        return this.items;
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let item = this.items[this.front];
        this.items[this.front] = null; //making the item null to remove the item from the array
        this.front = (this.front + 1) % this.size;
        this.currentLength--;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.front];
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    isFull() {
        return this.currentLength === this.size;
    }
    clear() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }
    print() {
        console.log(this.items);
    }
}
const queue = new circularQueue(2);
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
