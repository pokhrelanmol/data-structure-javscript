//  a linkedList is a lenear data structure that is made up of nodes that are connected to each other. each node has a value and a reference to the next node.
// The list element can be easily added to the end of the list by adding a new node to the end of the list.
// random access of the element is not fiseable in a linked list so it have linear time complexity.
// it supports the following operations:
// 1. insersion - adds an element to the end of the list.
// 2. deletion- removes an element from the end of the list.
// 3. search - searches for an element in the list.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    // 0(1) time complexity
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            t;
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }
    // 0(n) time complexity
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;

            while (prev.next) {
                prev = prev.next;
            }
            // while loop will exit at the last node where next = null

            prev.next = node;
        }

        this.size++;
    }
    // insert the new node at given index
    insert(value, index) {
        const node = new Node(value);
        if (index < 0 || index > this.size) return "invalid index";
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    search(value) {
        if (this.isEmpty()) return -1;
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            if (current.value === value) {
                console.log("value is at index " + i);
                return i;
            }
            current = current.next;
        }

        console.log("no value found");
        return -1;
    }
    reverse() {
        if (this.isEmpty()) return;
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    remove(index) {
        if (index < 0 || index >= this.size) return "invalid index";
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
    }

    removeWithValue(value) {
        if (this.isEmpty()) return;
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.value === value) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let current = this.head;
            let listValues = "";
            while (current) {
                // i didn't knew that we can do += for stings
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues);
        }
    }
}
const linkedlist = new linkedList();
linkedlist.prepend(10);
linkedlist.prepend(20);
linkedlist.prepend(30);
linkedlist.print();

linkedlist.append(40);
linkedlist.print();

linkedlist.insert(50, 2);
linkedlist.print();

linkedlist.search(10);

linkedlist.reverse();
linkedlist.print();

linkedlist.remove(2);
linkedlist.print();
