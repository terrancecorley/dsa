class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;

        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.length) return undefined;

        const nodeToRemove = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            nodeToRemove.next = null;
        }

        this.length--;
        return nodeToRemove;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;

        let counter;
        let current;
        if (index <= this.length / 2) {
            counter = 0;
            current = this.head;
            while (counter < index) {
                current = current.next;
                counter++
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter > index) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    set(index, value) {
        const nodeToSet = this.get(index);
        if (!nodeToSet) return undefined;
        nodeToSet.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return !!this.unshift(value);
        if (index === this.length - 1) return !!this.push(value);

        const newNode = new Node(value);
        const beforeNode = get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.shift();
        
        if (index === this.length - 1) return this.pop();

        const beforeNode = get(index - 1);
        const nodeToRemove = beforeNode.next;
        const afterNode = nodeToRemove.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return nodeToRemove;  
    }
}

const newList = new DoublyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
console.log(newList);