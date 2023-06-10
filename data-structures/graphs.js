// * What is a graph?
// A graph consists of nodes and connections (edges) between them

// * What are some examples that may use graphs?
// social networks
// recommendations 
// map routing 

// * Essential graph terms
// Vertex - a node
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distances between vertices

// A Tree can only have one path from one node to another
// Undirected graphs are two-way connections
// Directed graphs are often represented with arrows defining their direction to other nodes
// A weighted graph has edges that contain values
// We can use an adjacency matrix to represent a graph
// We can also use an adjacency list to represent a graph 

// * Adjacency List Pros
// Can take up less space (in sparse graphs)
// Faster to iterate over all the edges

// * Adjacency List Cons
// Can be slower to look up specific edge

// * Adjacency Matrix Pros
// Faster to look up specific edge

// * Adjacency Matrix Cons
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges

// Undirected Graph Class
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // method does not handle dulicates, in real world we would probalby want to handle them
        this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex) {
        // method does not contain error handling
        while (this.adjacencyList[vertex].length) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    } 

    addEdge(vertex1, vertex2) {
        // method does not contain error handling
        // In a directed graph we would only push onto one array since the edge would have a direction 
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        // method does not contain error handling
        // In a directed graph we would only remove from one array since the edge would have a direction
        // Could use es6 .filter method
        for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
            let currentValue = this.adjacencyList[vertex1][i];
            if (currentValue === vertex2) {
                this.adjacencyList[vertex1].splice(i, 1);
                break;
            }
        }

        for (let i = 0; i < this.adjacencyList[vertex2].length; i++) {
            let currentValue = this.adjacencyList[vertex2][i];
            if (currentValue === vertex1) {
                this.adjacencyList[vertex2].splice(i, 1);
                break;
            }
        }
    }
}

const g = new Graph();
g.addVertex('tokyo');
g.addVertex('san diego');
g.addVertex('new york');
g.addEdge('san diego', 'new york');
console.log(g)
g.removeVertex('san diego');
console.log(g)

const test = [1, 2];
console.log(test[test.length - 1])