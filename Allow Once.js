// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = { calls: 1, value: fn(...args) };
            return result.value;
        } else {
            return undefined;
        }
    };
}

// Example usage:
const example1 = (a, b, c) => a + b + c;
const example2 = (a, b, c) => a * b * c;

const onceFn1 = once(example1);
console.log(onceFn1(1, 2, 3)); // Output: 6
console.log(onceFn1(2, 3, 6)); // Output: undefined

const onceFn2 = once(example2);
console.log(onceFn2(5, 7, 4)); // Output: 140
console.log(onceFn2(2, 3, 6)); // Output: undefined
console.log(onceFn2(4, 6, 8)); // Output: undefined


//Time Complexity: O(1) for each call of the returned function.
// Space Complexity: O(1). The closure uses a constant amount of space.