// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

//  Solution :=
function map(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

// Example 1:
const arr1 = [1, 2, 3];
const plusOne = function(n) { return n + 1; };
const result1 = map(arr1, plusOne);
console.log(result1); // Output: [2, 3, 4]

// Example 2:
const arr2 = [1, 2, 3];
const plusI = function(n, i) { return n + i; };
const result2 = map(arr2, plusI);
console.log(result2); // Output: [1, 3, 5]

// Example 3:
const arr3 = [10, 20, 30];
const constant = function() { return 42; };
const result3 = map(arr3, constant);
console.log(result3); // Output: [42, 42, 42]

//Time Complexity: O(n)
// Space Complexity: O(n)