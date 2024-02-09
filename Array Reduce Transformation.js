// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

function customReduce(nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
const reducer = function(acc, num) {
    return acc + num;
};

const initValue = 0;
const result = customReduce(nums, reducer, initValue);
console.log(result); // Output: 10

//Time Complexity := O(n)
//Space Cmplexity := O(1)