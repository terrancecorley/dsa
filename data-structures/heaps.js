// * Heaps are another category of trees 
// Similar to a BST
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

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
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

        return this.values;
    }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(55))
console.log(heap.insert(12))
console.log(heap.insert(27))
console.log(heap.insert(18))
console.log(heap.insert(33))
console.log(heap.insert(39))
console.log(heap.insert(41))
console.log(heap.insert(1))
console.log(heap.insert(18))
console.log(heap.insert(100000))