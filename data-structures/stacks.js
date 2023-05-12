// there is more than one way to implement a stack
// stacks are a LIFO abstract data structure
// the easiest way to implement is with an array

// used for things like undo/redo, the call stack, the browser back and forward logic

// Big O
// Insertion O(1)
// Removal O(1)
// Searching O(1)
// Access O(1)

// easy example of a stack with an array
const arrayStack = [];
arrayStack.push('google.com');
arrayStack.push('youtube.com');
arrayStack.push('bing.com');
arrayStack.pop();

// stack with a singly linked list, could also do doubly
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack expects O(1) for "push" and "pop". Not possible with traditional linked list push and pop,
// we can name the methods as push and pop, but instead implement the logic for shift and unshift
// since these methods are O(1) for linked lists
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        // * Actually doing an unshift
        const newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;
        return this;
    }

    pop() {
        // * Actually doing a shift
        if (!this.size) return undefined;

        if (this.size === 1) {
            this.last = null;
        }

        const nodeToReturn = this.first;
        this.first = this.first.next;
        nodeToReturn.next = null;
        this.size--;
        return nodeToReturn;
    }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack)