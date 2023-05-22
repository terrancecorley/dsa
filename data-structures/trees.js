// Non-linear data structure
// Every node moves away from the root node-- no nodes reference a parent or sibling node
// A leaf if a node with no children nodes
// An edge is a connection line between nodes
// HTML DOM is an example of a tree structure
// Network routing also uses tree structures
// Folders and AI both use tree structures

// * Binary Tree (BT)
// A category of tree data structures 
// Each node can have no more than 2 children nodes

// * Binary Search Trees (BST)
// A type of binary tree
// Sorted in a particularily way-- children to the left of a parent are less, children to the right are more
// Used to store data that can be compared usually 

// * Big O BST
// Insertion - O(log n), but if more single-sided then O(n)
// Searching - O(log n), but if more single-sided then O(n)

// * Traversal
// Breadth first search (bfs), searching levels/siblings first
// Depth first search (dfs), searching one side side all the way through first

// * BFS vs DFS
// time complexity is the same between the two
// really wide tree, bfs would take up more space
// really long tree, dfs would take up more space
// DFS - inOrder, for a binary search tree we will retrieve results in order
// DFS - preOrder, could be used to export a tree structure

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while (true) {
                // Pretending the interviewer asked us to disregard duplicate values
                if (value === currentNode.value) return undefined;
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (!this.root) return false;

        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) return currentNode;
            if (value < currentNode.value) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    return false;
                }
            }
            if (value > currentNode.value) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                } else {
                    return false;
                }
            }
        }
    }

    bfs() {
        if (!this.root) return undefined;

        const queue = [];
        const visited = [];
        let node = this.root
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return visited;
    }

    // * Pushing as you node visit
    dfsPreOrder() {
        if (!this.root) return undefined;

        const visited = [];

        function traverse(node) {
            visited.push(node.value);

            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
        return visited;
    }

    // * Pushing after last node visit
    dfsPostOrder() {
        if (!this.root) return undefined;

        const visited = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }

            visited.push(node.value);
        }

        traverse(this.root);
        return visited;
    }

    // * Pushing after exhausting the left, then right, as we go
    dfsInOrder() {
        if (!this.root) return undefined;

        const visited = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            visited.push(node.value);

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
        return visited;
    }
}

const tree = new BST();
tree.insert(5);
tree.insert(1);
tree.insert(10);
tree.insert(7);
tree.insert(3);
console.log(tree.find(10))
console.log(tree)
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())