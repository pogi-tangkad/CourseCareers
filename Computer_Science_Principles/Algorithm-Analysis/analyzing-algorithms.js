
// O(1): no matter the size of "num", a single operation is performed
function example1(num) {
    return num % 2 == 0;
}


/*  if you see a loop, you will have some (n) of operations
    2 + n operations = linear O(n)
*/
function example2(nums) {
    let total = 0;  // 1 operation

    for (const number of nums) {
        total += number;    // n number of operations
    }
    return total;   // 1 operation
}


/*  this has a loop inside a loop, so for every n we execute n
    that translates to n*n or n^2
    the exact setup for below would be 2n^2 + n + 1, but since
    we are only concerned with the largest factor and no constants
    we get O(n^2)
*/
function example3(nums) {
    const results = Array(nums.length).fill(1); // n

    for (let [i, num1] of nums.entries()){      // n _____
        for (const num2 of nums) {              // n _    \
            if (num1 === num2) continue;        // 1  \ 2n = 2n^2
            // this internal n runs n times (n^2)     /   /
            results[i] *= num2;                 // 1 /___/
        }
    }
    return results;                             // 1
}


/*  this has two separate determining values.
    value n is being iterated 1n or just n times; O(n)
    value m is being iterated 3m or just m times; O(m)
    so the combined notation for this is O(n+m)
*/
function example4(nums1, nums2) {
    const results = [];                     // 1

    for (const num of nums1) {              // n = 1n
        results.push(num);              // 1   /
    }

    for (let [i, num] of nums2.entries()) { // m = 3m
        if (i >= results.length) {      // 1 \   /
            results.push(1);            // 1 = 3
        }                               //    /
        results[i] *= num;              // 1 /
    }

    return results;                     // 1
}


/*  nested arrays can be looked at like rows and columns
    the size of the outer or containing array is the number of rows
    or height; h
    and the size of the largest inner array is the number of columns
    or width; w
    I like to think of a spreadsheet layout
    in the following fuction we will use h and w like n and m
    for every inner array (h) we are going over the values 3 times
    this gives h * 3w or simplified for big O notation
    O(h*w)
*/
function example5(nestedArr) {
    let total = 0;                      // 1

    for (const innerArr of nestedArr) { // h -------h(3w)
        for (const num of innerArr) {   // w --  3w 
            total += num;   // 1 (ignore)       /
        }
        for (const num of innerArr) {   // w  /
            total += num;   // 1 (ignore)
        }
        for (const num of innerArr) {   // w /
            total += num;   // 1 (ignore)
        }
    }

    return total;                       // 1
}


/*  recursion:
    the following function is a positional value generator for
    the Fibonacci sequence.
    with n being a very large number; for ever execution of the
    function, we call it 2 more times.
    each of those subsequent 2 calls will call it an additional
    2 times until we hit the base cases.
    this evaluates to the notation O(2^n)
    exponential growth based on the number of possible
    internally recursive calls.
    if the function had 3 internal calls it would be O(3^n)
*/
function example6(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;

    const last = example(n - 1);
    const secondLast = example(n - 2);
    return last + secondLast;
}


//  O(n+m)
function example7(arr, searchLst) {
    let max = Math.max(...arr);             // n

    for (const value of searchLst) {        // m
        if (max === value) return true; //worst case this never happens
    }
    return false;                           // 1
       
}


/*  the following recursive function has a single internal call
    that halves the value of n each time
    this is a logarithmic operation.  as n gets larger,
    the time taken increases at a slower rate than n is growing.
    this is noted as O(log_2(n)
    if this was being reduced by 5 every iteration, you would
    get O(log_5(n))
*/
function example8(n) {
    if (n === 0) return;

    console.log(n);
    example8(Math.floor(n / 2));
}


/*  This one is a bit tricky because you have to not only analyze
    the loops and value types/sizes, but there is a separate
    function call as well as multiple type functions called
    (includes, split, sort, join) each having their own time
    complexities
    n being the main loop and its internals multiplied to it
    with each of those being additive to each other
    broken out within the function and finalized below
    n * k+k(log_2(k))) = n * k(1 + log_2(k))) = n * k(log_2(k))
*/
function getDigits() {
    const digits = [];

    for (let i = 0; i < 10; i++) {      // always 10 iterations
        digits.push(i);                 // so ignored time complexity
    }

    return digits;
}
// strings are commonly k in big O notation
function example9(strings) {  //assume all strings are max possible size
    for (const [i,string] of strings.entries()){            // n
        let digits = 0;
        for (const char of string) {                        // k
            if (getDigits().includes(char)) digits += 1; //still constant time
        }
    }
    if (digits >= string.length / 2) {  // if's could run every time
        strings[i] = string.split("").sort.join("")         //k(log_2(k))
    }               // split=k  sort=k(log_2(k))   join=k
}                   // = 2k+k(log_2(k)) = k(log_2(k))



/*  n time loop inside an n time loop inside and n time loop
    n * n * n = O(n^3)
    both internal loops are changing in number of operations
    first is reducing by 1 and second is increasing by 1
    regardless of the first shrinking and second growing,
    as n approaches infinity (worst case scenario) the two
    internal loops approach n
*/
function example11(nums){
    const sumToEnd = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {             // n
        sumToEnd.push(0);

        for (let j = i + i; j < nums.length; j++) {   // n
            const num2 = nums[j];
            sumToEnd[i] += num2;

            for (const x of sumToEnd) {             // n
                count += 1;
                console.log(count;)
            }
        }
    }
    return sumToEnd;
}


/*  The following recursive function is an example of O(n!)
    the internal loop calls the function
    n, n-1, n-2, n-3... 3, 2, 1 times to use addition
    to simulate multiplication
    which is n * n-1 * n-2 * n-3 * 3 * 2 * 1 = n!
    this is the slowest singular form of big O notation
*/
function example12(n) {
    if (n === 1) return 1; // 1

    let total = 0;  // 1

    for (let x = 0; x < n; x++) {   // called n times for each n
        total += example12(n-1);
    }

    return total; // 1
}