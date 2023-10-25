// * q: What is dynamic programming?
// * a: A method for solving more complex problems by breaking it into smaller problems and solving those. Most problems cannot be solved with dynamic programming, but in the cases where it can, it can usually speed up your code.
// * Only works with overlapping problems
// * Fibonnaci is an example where this can be applied
// * Shortest path works but not longest path
// * Optimal sub structure is when the optimal solution can be constructed from optimal solutions of a problem's subproblems

// * Big O is O(2^n), actually 1.6 but commonly rounded up
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// * Big O, roughly O(n)
function fibMemo(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;

    let res = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    memo[n] = res;
    return res;
}

// * Big O, O(n), way better space complexity
function fibTabulation(n) {
    if (n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1]  + fibNums[i-2];
    }

    return fibNums[n];
}

console.log(fib(3));
console.log(fibMemo(3))
console.log(fibTabulation(3))