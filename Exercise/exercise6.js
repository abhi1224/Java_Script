/*
🔹 1. Variables & Data Types
Q1: What will be the output of the following code?
*/

console.log(a); // undefined
var a = 10;
console.log(a); // 10
// why? because of hoisting


/*
Q2: Declare a variable using const that holds an object with properties:

name: "John"
age: 25
Then, change only the age property and print the object.
*/

const user = {
    name: "John",
    age: 25
}

user.age = 34;
console.log(user.age);// 34


/*
Q3: Given an array of numbers, write a function that returns a new array containing only odd numbers.
let numbers = [10, 15, 21, 30, 45, 50];
// Function to return odd numbers
*/
let numbers = [10, 15, 21, 30, 45, 50];
let oddnumber = (numbers) => {
    return numbers.filter((num) => num % 2 !== 0);
}

// Second method

function oddNum(num){
    let result = [];
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 != 0){
            result.push(num[i]);
        }
    }
    return result;
}

// console.log(oddnumber(numbers));
// console.log(oddNum(numbers));

/*
Q4: Given an array of objects representing students:

Write a function that returns an array of students who scored above 60.
*/


let students = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 50 },
    { name: "Charlie", score: 90 }
  ];

const result = (students) => {
    return students.filter((student) => student.score > 60).map((student) => student.score);
}
// console.log(result(students));


/*
Q5: Write a function that takes a number and returns its square.
Then, convert it into an IIFE (Immediately Invoked Function Expression).
*/

function square(num){
    return num * num;
}
// console.log(square(8));

// IIFE
(function squa(num){
    // console.log(num * num);    
})(8);


/*
Q7: What will be the output of the following?

❓ Why does this cause an error?
*/
// console.log(x);
let x = 20;
// ReferenceError: Cannot access 'x' before initialization
// why? because let and const are not hoisted



/*
Q10: Convert an array of temperatures from Celsius to Fahrenheit using map().
Formula: (Celsius * 9/5) + 32
*/
let celsius = [0, 20, 30, 40, 100];
let answer = celsius.map((temperature) =>(temperature * 9/5) + 32 );
// console.log(answer);


/*
Q11: Find the total cost of items in a shopping cart using reduce().
*/
let cart = [
    { item: "Laptop", price: 1200 },
    { item: "Phone", price: 800 },
    { item: "Headphones", price: 150 }
  ];
answer = cart.reduce((acc,item) => acc + item.price ,0)
// console.log(answer);


/*
Q12: Chain filter(), map(), and reduce() together:

Get all numbers greater than 10.
Multiply them by 2.
Find the sum of the transformed numbers.x
*/
numbers = [5, 10, 15, 20, 25];
answer = numbers.filter((num) => num > 10).map((result) => result * 2).reduce((acc, item) => acc + item ,0)
console.log(answer);

 