class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        let current = this.head;
        let listValues = "";
        while (current) {
            listValues += current.value + " ";
            current = current.next;
        }
        console.log(listValues);
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront() {
        if (this.isEmpty()) return "list is empty";
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    removeFromBack() {
        if (this.isEmpty()) return "list is empty";
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.size--;
        return value;
    }
}
// const list = new LinkedList();
// list.prepend(1);
// list.prepend(2);
// list.print();
// list.append(3);
// list.print();
// list.removeFromFront();
// list.print();
// list.removeFromBack();
// list.print();
module.exports = LinkedList;
