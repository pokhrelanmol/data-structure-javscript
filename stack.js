// the stack is a data structure that can be used to store and manipulate data in a LIFO (last in first out) fashion.
// when to use a stack:
// 1. trace the history of a program.
// 2. undo and redo operations.

// Stack supports the following operations:
// 1. push - adds an element to the top of the stack.
// 2. pop - removes an element from the top of the stack.
// 3. peek - returns the top element of the stack.
// 4. isEmpty - returns true if the stack is empty, false otherwise.
// 5. size - returns the number of elements in the stack.
// 6. clear - removes all elements from the stack.

// Stack implementation in javascript
class Stack {
    constructor() {
        this.items = [];
        this.name = "anmol";
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
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
const stack = new Stack();
// stack methods
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.peek(); // returns 4
stack.pop(); // returns 4
stack.size(); // returns 3
stack.isEmpty(); // returns false
stack.clear(); // removes all elements from the stack
stack.print(); // prints [ ]
