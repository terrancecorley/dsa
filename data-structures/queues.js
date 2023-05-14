// FIFO data structure
// Used in background tasks, uploading resources, game lobby joining, print queue
// Can build with an array or list

// Big O
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

// Array method
const q = [];
// then either use push and shift or
// unshift and pop

// Singly linked list method
// We want to add to the tail and remove from the head

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    } 
}

class Queue {
    constructor() {
        // The "head" in this case
        this.first = null;
        // The "tail" in this case
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if (!this.size) return undefined;

        if (this.size === 1) {
            this.tail = null;
        }

        const oldFirst = this.first;
        this.first = this.first.next;
        oldFirst.next = null;

        this.length--;
        return oldFirst;
    }
}