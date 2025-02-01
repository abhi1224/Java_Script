//Exercise 1: Identify the Data Type

console.log(typeof Number("42"));   // Number
console.log(typeof String(100));  // String
console.log(typeof Boolean(0));  // Boolean
console.log(typeof Symbol("id"));  // Symbol
console.log(typeof BigInt(12345678901234567890));  // BigInt

console.log(typeof Object({ name: "John" }));  // Object

/*
Arrays are objects with special behaviors.
In JavaScript, arrays are a special type of object. That’s why when you check typeof an array, it returns "object" instead of "array".
*/
console.log(typeof Array(1, 2, 3));  // Object

// To check if a value is an array, you can use the Array.isArray() method:
console.log(Array.isArray([1,2,3])); // true


