const G = require('./index');
const Graph = G.Graph;

describe('Graph', () => {
  test('Graph is a constructor', () => {
    expect(typeof Graph.prototype.constructor)
    .toEqual('function')
  });

  test('Graph has a adjaceny list property', () => {
    const g = new Graph();
    expect(g.adjList).toEqual({});
  });

  test('Graph can add nodes', () => {
    const g = new Graph();
    g.addNode({value: 1});
    expect(g.adjList).toEqual(
      {
        1: {
          edges: [],
        }
      }
    );
  });

  test('Graph can add edges', () => {
    const g = new Graph();
    const node1 = {value: 1};
    const node2 = {value: 2};
    g.addNode(node1)
    g.addNode(node2)
    g.addEdge(node1, node2);
    expect(g.adjList).toEqual(
      {
        1: {
          edges: [{ value: 2 }],
        },
        2: {
          edges: [{ value: 1 }],
        }
      }
    );
  });

  test('Graph can remove edge',() => {
    const g = new Graph();
    const node1 = {value: 1};
    const node2 = {value: 2};
    g.addNode(node1)
    g.addNode(node2)
    g.removeEdge(node1)
    expect(g.adjList).toEqual(
      {
        2: {
          edges: [],
        }
      }
    );
  })
})