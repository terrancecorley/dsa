// * Heaps are another category of trees 
// Binary Heaps are similar to a BST
// MaxBinaryHeap, Children nodes are always smaller
// MinBinaryHeap, Children nodes are always larger
// No order like how a BST has smaller numbers to the left and larger to the right of the root
// Each parent has at most two children nodes
// Heaps are commonly used to implement priority queues 
// Used also with graph traversal
// We can use an array to store a heap
// Left child is always 2n + 1 for left and 2n + 2 for right, multiply the arr index by 2
// To find parent, (n - 1) / 2, floor is decimal answer
// Heaps fill out the left side before the right
// Solutions below do not accept duplicate values, would need extra logic for that

// * Bio O of Binary Heaps
// Insertion - O(log N)
// Removal - O(log N)
// Search - O(N)

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null
        
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    swap === null && rightChild > element ||
                    swap !== null && rightChild > leftChild
                ) {
                    swap = rightChildIdx
                }
            }
        
            if (swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(41))
console.log(heap.insert(39))
console.log(heap.insert(33))
console.log(heap.insert(18))
console.log(heap.insert(27))
console.log(heap.insert(12))
console.log(heap.insert(55))
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.insert(10));
console.log(heap.insert(99));

// * Priority Queue
// * Implemented as MinBinaryHeap

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }

        return this.values;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 1;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    swap === null && rightChild.priority < element.priority ||
                    swap !== null && rightChild.priority < leftChild.priority
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    dequeue() {
        if (!this.values.length) return undefined;
        
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }
}

let ER = new PriorityQueue();
console.log(ER.enqueue('common cold', 5));
console.log(ER.enqueue('gunshot', 1));
console.log(ER.enqueue('high fever', 4));
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());