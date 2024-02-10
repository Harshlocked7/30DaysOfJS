// Write a function argumentsLength that returns the count of arguments passed to it.
function argumentsLength(...args) {
    return args.length;
}

// Example usage:
console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3
