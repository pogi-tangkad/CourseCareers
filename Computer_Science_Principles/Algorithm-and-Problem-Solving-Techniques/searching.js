/*  Binary Search with recursion
 */

function binSearch(arr, target, start, end) {
  if (start > end) return false;

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) return true; // found target

  if (arr[middle] > target) {
    return binSearch(arr, target, start, middle - 1);
  } else {
    return binSearch(arr, target, middle + 1, end);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binSearch(arr, 3, 0, arr.length - 1));
console.log(binSearch(arr, 9, 0, arr.length - 1));
console.log(binSearch(arr, 23, 0, arr.length - 1));

const maze = [
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", " ", " "],
  ["#", "#", "#", "#", " ", "#", " ", "#", "#", "#"],
  [" ", " ", " ", " ", " ", " ", " ", "#", " ", " "],
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", "#"],
  ["#", "#", "#", "#", " ", "#", "#", "#", " ", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", "#", "#"],
  [" ", "#", "#", "#", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "#", "#", "#", "#", "X"],
];

function getStringPos(pos) {
  return `${pos[0]},${pos[1]}`;
}

function getNeighbors(arr, x, y) {
  const neighbors = [];

  // right
  if (x >= 1 && arr[y][x - 1] !== "#") {
    neighbors.push([y, x - 1]);
  }
  // left
  if (x < arr[y].length - 1 && arr[y][x + 1] !== "#") {
    neighbors.push([y, x + 1]);
  }
  // up
  if (y >= 1 && arr[y - 1][x] !== "#") {
    neighbors.push([y - 1, x]);
  }
  // down
  if (y < arr.length - 1 && arr[y + 1][x] !== "#") {
    neighbors.push([y + 1, x]);
  }

  /* in DFS, this acts like FILO so the order can determine
    the speed of the search.
  */
  return neighbors;
}

/*  Depth First Search
    like a snake moving in a direction as far as possible
    then backtracking along itself. Can be quick or slow
    depending on the stack order matching up best with
    the path
    O(w * h)   w = len of inner array, h = len outer of array
 */
function dfs(arr) {
  const visited = new Set();
  const stack = [[0, 0]]; // y, x

  while (stack.length > 0) {
    const pos = stack.pop();
    const [y, x] = pos;

    if (arr[y][x] === "X") {
      break;
    }

    const strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(arr, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) {
        continue;
      }
      stack.push(neighbor);
    }
  }

  return visited;
}

const solvedDfs = dfs(maze);
console.log(solvedDfs);

let dfsMaze = maze.map((inner) => [...inner]);
for (const pos of solvedDfs) {
  const [y, x] = pos.split(",");
  dfsMaze[y][x] = "@";
}

for (const row of dfsMaze) {
  let rowVal = "";
  for (const pos of row) {
    rowVal += pos;
  }
  console.log(rowVal);
}

/*  Bredth First Search
    this will exhaust every option along the path until
    it reaches the target position.  This is slower in 
    practice than DFS when using a queue of array.
    the queue.shift could be every element in the worst
    case scenario. like a maze with no walls and the
    start and end on opposite corners but you still
    check every tile of the ground.
    so the bigO would be O((w * h)^2)
    ** I hope I didn't misundertand the reasoning for this **
 */
function bfs(arr) {
  const visited = new Set();
  const queue = [[0, 0]]; // using a queue with array affects the time

  while (queue.length > 0) {
    const pos = queue.shift();
    const [y, x] = pos;

    if (arr[y][x] === "X") {
      break;
    }

    const strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(arr, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) {
        continue;
      }
      queue.push(neighbor);
    }
  }

  return visited;
}

const solvedBfs = bfs(maze);
console.log(solvedBfs);

let bfsMaze = maze.map((inner) => [...inner]);
for (const pos of solvedBfs) {
  const [y, x] = pos.split(",");
  bfsMaze[y][x] = "@";
}

for (const row of bfsMaze) {
  let rowVal = "";
  for (const pos of row) {
    rowVal += pos;
  }
  console.log(rowVal);
}
