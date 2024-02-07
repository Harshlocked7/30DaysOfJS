//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function() {
    
    return function(...args) {
       return "Hello World";
    }
   
};

const f = createHelloWorld();  // Creates an instance of the generated function
console.log(f());              // Outputs: "Hello World"
console.log(f(1, 2, 3));        // Outputs: "Hello World"

// Time Complexity: O(1)
// Space Complexity: O(1)