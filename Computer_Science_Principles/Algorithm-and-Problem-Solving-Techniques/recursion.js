/*  Standard Fibonacci recursion:
    the problem here is that as n gets larger we
    are calling the function on values that we have already
    calculated.  every (n-1) will recompute items(n-2) has
    completed.  Both time complexity and memory usage
    are very bad (and likely impossible for my sad computer)
    for extremely large values of n
    time complexity here: O(2^n)
*/
function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(8));
console.log(fib(12));
console.log(fib(40)); // sloooooooow

/*  Memoization version (cached):
    here we are storing every computed value in a map at each
    n index.  If we check if that index has already been
    calculated, then we don't need to work back through the
    sequence again.
    time complexity: O(n)
    space complexity: O(n)
*/
function fibMemoized(n, calculated = { 1: 1, 2: 1 }) {
  if (n in calculated) return calculated[n];
  const result =
    fibMemoized(n - 1, calculated) + fibMemoized(n - 2, calculated);
  calculated[n] = result;
  return result;
}

console.log(fibMemoized(8));
console.log(fibMemoized(12));
console.log(fibMemoized(40));

/*  Want to save more space and still O(n)?
    skip recursion and use a loop with tracking variables
    time: O(n)
    space: O(1)
 */
function fibIter(n) {
  if (n <= 2) return 1;

  let last = 1; // term 2
  let secondLast = 1; // term 1
  for (let i = 2; i < n; i++) {
    const temp = last;
    last = last + secondLast;
    secondLast = temp;
  }
  return last;
}

console.log(fibIter(8));
console.log(fibIter(12));
console.log(fibIter(40));

/*  Binary Tree Traversal

*/

//node object for creating nodes in binary tree
class Node {
  value;
  left;
  right;

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// build values for tree
const node10 = new Node(10);
const node9 = new Node(9);
const node8 = new Node(8);
const node7 = new Node(7);
const node6 = new Node(6, node10);
const node5 = new Node(5, node9);
const node4 = new Node(4, node8);
const node3 = new Node(3, node6, node7);
const node2 = new Node(2, node4, node5);
const head = new Node(1, node2, node3);

/*  In order left
    goes to far left and backtracks to each consecutive
    furthest left node
*/
function inOrder(node) {
  if (node == null) return;

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

/*  Pre Order left
    similar to above, but marking every node as you
    traverse leftward each branch of the tree
*/

function preOrder(node) {
  if (node == null) return;

  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

/*  Post Order left
    this time we are marking after we have visited the ends
    of each branch working left to right back to the head
*/
function postOrder(node) {
  if (node == null) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

console.log("In-Order:");
inOrder(head);
console.log("Pre-Order:");
preOrder(head);
console.log("Post-Order:");
postOrder(head);

//  Reversing a string with recursion (array for O(1) for rebuilding)
function reverseString(string, newStr = []) {
  if (string.length == 0) return;

  const char = string[0];
  reverseString(string.slice(1), newStr);
  newStr.push(char);

  return newStr.join("");
}

const str2 = "Pogi is awesome!";
const result2 = reverseString(str2);
console.log(result2);

const str3 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const result3 = reverseString(str3);
console.log(result3);
