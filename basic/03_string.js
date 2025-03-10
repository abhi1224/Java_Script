"use strict"; // treat all js code as newer version of js


// Data Type :  1. Primitive 2. Non Primitive(Reference)

// Primitive : - 7 Types :- String, Number, Boolean, null, undefined, Symbol
// Reference(Non Primitive) :- Array, Object, Functions
/* 
In string we can use ' ' or " " . we can concatinate to string by using + operator 
*/
console.log("Abhishek "+"Kumar " +"Verma")

const name = "Abhi"
const age = 24
console.log(`Hello my name is ${name} and my age is ${age}.`)

const gameName = new String('abhishek') // another way to declare a string


//string methods


console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('i'))

// const newString  = gameName.substring(0,5)
// console.log(newString)

// const trimMethod = "       abhishek        "
// console.log(trimMethod)
// console.log(trimMethod.trim())


const url = "https://google.com/%20google"
console.log(url.replace('%20','-'))

console.log(url.includes('google'))


// string + number = string 

console.log('123' + 5); // output - 1235 (string)

// string * number = number

console.log('35' * 2); // output - 70 (number)
