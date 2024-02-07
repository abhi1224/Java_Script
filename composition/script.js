// Functions for basic operations
const add = x => x + 2;
const multiply = x => x * 3;
const subtract = x => x - 5;

// Function composition
const composedFunction = (input) => subtract(multiply(add(input)));

// Using the composed function
const result = composedFunction(10);
console.log(result); // Output: 31