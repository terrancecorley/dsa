// * What is a graph?
// A graph consists of nodes and connections (edges) between them
// Every tree is a graph, but not every graph is a tree

// * What are some examples that may use graphs?
// social networks
// recommendations 
// map routing 
// shortest path

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

class UndirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            this.adjacencyList[vertex] = [];
        }
    }

    // todo: add err handling for invalid vertices
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // todo: add err handling for invalid vertices
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => item !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1);
    }

    // todo: add err handling for invalid vertices
    removeVertex(vertex) {
        const vertexList = this.adjacencyList[vertex];
        for (let i = 0; i < vertexList.length; i++) {
            this.removeEdge(vertexList[i], vertex);
        }

        delete this.adjacencyList[vertex];
    }

    dfsRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        })(start);

        return result;
    }

    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        
        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }

    bfsIterative(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        
        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
};

const graphy = new UndirectedGraph();
graphy.addVertex('A');
graphy.addVertex('B');
graphy.addVertex('C');
graphy.addVertex('D');
graphy.addVertex('E');
graphy.addVertex('F');
graphy.addEdge('A', 'B');
graphy.addEdge('A', 'C');
graphy.addEdge('B', 'D');
graphy.addEdge('C', 'E');
graphy.addEdge('D', 'E');
graphy.addEdge('D', 'F');
graphy.addEdge('E', 'F');
console.log(graphy.dfsRecursive('A'));
console.log(graphy.dfsIterative('A'));
console.log(graphy.bfsIterative('A'));