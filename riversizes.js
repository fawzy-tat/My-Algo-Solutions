const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map((node) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traversenode(matrix, visited, i, j, sizes);
    }
  }
  return sizes;
}

function traversenode(matrix, visited, i, j, sizes) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unVisitedNeighbors = getUnVisitedNeighbors(matrix, visited, i, j);
    for (const neighbor of unVisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnVisitedNeighbors(matrix, visited, i, j) {
  const unVisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unVisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unVisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unVisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unVisitedNeighbors.push([i, j + 1]);
  return unVisitedNeighbors;
}

const result = riverSizes(matrix);
console.log(result);
