// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
    return function() {
        return n++;
    };
}

// Example usage:
const n1 = 10;
const counter1 = createCounter(n1);

const result1 = ["call", "call", "call"].map(() => counter1());
console.log(result1); // Output: [10, 11, 12]

const n2 = -2;
const counter2 = createCounter(n2);

const result2 = ["call", "call", "call", "call", "call"].map(() => counter2());
console.log(result2); // Output: [-2, -1, 0, 1, 2]

// Time Complexity: O(k)
// Space Complexity: O(1)