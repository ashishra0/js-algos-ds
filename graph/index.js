class Graph {
  constructor() {
    this.adjList = {}
  }
  
  addNode(node) {
    this.adjList[node.value] = {
      node: node,
      edges: []
    }
  }
  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2);
    this.adjList[node2.value].edges.push(node1);
  }

  removeEdge(node) {
    delete this.adjList[node.value];
    const nodes = Object.keys(this.adjList)
    // Object.Keys will take the keys of the object and place it in an array.
    nodes.forEach(currNode => {
      const edges = this.adjList[currNode].edges
      if (edges.indexOf(node) > -1) { // this returns -1 if there is no value match.
        edges.splice(index, 1)
      }
    });
  }
}

const graph = new Graph();
const node1 = {value: 1}
const node2 = {value : 2}
graph.addNode(node1)
graph.addNode(node2)
graph.addEdge(node1, node2);
console.log(graph)