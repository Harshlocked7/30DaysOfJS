// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.


//Solution:= 
const compose = functions => x => functions.reduceRight((result, fn) => fn(result), x);

// Example usage:
const example1 = [x => x + 1, x => x * x, x => 2 * x];
const example2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const example3 = [];

console.log(compose(example1)(4)); // Output: 65
console.log(compose(example2)(1)); // Output: 1000
console.log(compose(example3)(42)); // Output: 42

 