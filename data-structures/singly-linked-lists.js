class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;

        if (this.length === 1) {
            let nodeToReturn = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return nodeToReturn;
        }

        let currentNode = this.head;
        let prevNode = this.head;

        while (currentNode.next) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        prevNode.next = null;
        this.tail = prevNode;
        this.length--;
        return currentNode;
    }

    shift() {
        if (!this.length) return undefined;

        let nodeToReturn = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return nodeToReturn;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; 
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (
            !this.length ||
            isNaN(index) ||
            index >= this.length ||
            index < 0
        ) {
            return undefined
        }

        let counter = 0;
        let nodeToReturn = this.head;
        while (counter < index) {
            nodeToReturn = nodeToReturn.next;
            counter++;
        }

        return nodeToReturn;
    }
}

const newList = new SinglyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
console.log(newList)