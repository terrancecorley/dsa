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
};

const graphy = new UndirectedGraph();
graphy.addVertex('san diego');
graphy.addVertex('san diego');
graphy.addVertex('tokyo');
graphy.addVertex('tempe');
graphy.addEdge('san diego', 'tokyo');
graphy.addEdge('tempe', 'tokyo');
graphy.addEdge('san diego', 'tempe');
graphy.removeEdge('san diego', 'tokyo');
graphy.removeVertex('tempe');
console.log(graphy);