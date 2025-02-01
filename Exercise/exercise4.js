/*
Exercise 3: Array Properties and Methods
👉 Create an array fruits with at least 3 fruit names.
👉 Perform the following actions:

Print the length of the array.
Add a new fruit to the end using push().
Remove the last fruit using pop().
Print the modified array.

*/

let fruits = ["apple", "banana", "mango"]
console.log(fruits.length)

fruits.push("orange")
console.log(fruits);

fruits.pop()
console.log(fruits);


/*
Exercise 4: String Properties and Methods
👉 Create a string variable message with the value "Hello, JavaScript!"
👉 Perform the following actions:

Print the length of the string.
Convert the string to uppercase.
Replace "JavaScript" with "World" using .replace().
Print the final modified string.
*/

let message = String("Hello, JavaScript!")
console.log("Length of string : ",message.length);
console.log("Uppercase : ",message.toUpperCase());
console.log("Modified String : ",message.replace("JavaScript", "World"));


