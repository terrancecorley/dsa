class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

// todo: add validation to methods
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    shortestPathUdemySolution() {
        
    }

    shortestPath(start, end) {
        const distances = {};
        const firstKey = Object.keys(this.adjacencyList)[0];
        const queue = new PriorityQueue();
        const previous = {};

        for (let key in this.adjacencyList) {
            if (key === firstKey) {
                distances[key] = 0;
                queue.enqueue(key, 0);
            } else {
                distances[key] = Infinity;
                queue.enqueue(key, Infinity);
            }

            previous[key] = null;
        }

        while (queue.length > 0) {
            const currentVertex = queue.dequeue();
            if (currentVertex === end) {
                break;
            } else {
                this.adjacencyList[currentVertex].forEach((item) => {

                });
            }
        }

        console.log(distances)
        console.log(queue)
        console.log(previous)
    }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
// graph.shortestPath('A', 'C');
console.log(graph)