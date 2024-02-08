// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

//Solution:= 
function createCounter(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
}

// Example usage:
const counter1 = createCounter(5);
const result1 = ["increment", "reset", "decrement"].map((call) => counter1[call]());
console.log(result1); // Output: [6, 5, 4]

const counter2 = createCounter(0);
const result2 = ["increment", "increment", "decrement", "reset", "reset"].map((call) => counter2[call]());
console.log(result2); // Output: [1, 2, 1, 0, 0]
