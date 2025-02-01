// Array

// const arr  = [ 0 , 1 , 2 , 'True' , 'False']

// const myArr = new Array(0,1,2,3,4)
// console.log(myArr);
// myArr.push(6)
// myArr.push(7)
//  myArr.unshift(9)

// console.log(myArr);

// myArr.shift()
// console.log(myArr);
// myArr.pop()     // remove the last element

// const newArr = myArr.join()
// console.log(newArr)

// slice , splice

//  const myNum = myArr.slice(1,3)
//  console.log(myNum);

//  const myNum2 = myArr.splice(1,3) // manupulate the original array
//  console.log(myNum);

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Hulk", "Thor", "Captain America", "Black Widow"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2.length)

// Array methods 

myArr.push(6)
myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

myArr.unshift(9) // add the element at the beginning
myArr.shift() // remove the first element
// console.log(myArr);


console.log(myArr.includes(9)); // check the element is present or not
console.log(myArr.indexOf(3)); // find the index of the element


const newArr = myArr.join(); // convert the array into string
console.log(newArr);
console.log(typeof newArr); 

// slice and splice

const myNum = myArr.slice(1, 3); // slice the array
console.log(myNum);

const myNum2 = myArr.splice(1, 3); // splice the array
console.log(myNum2);

// printing original array 
console.log(myArr);


// Difference between slice and splice is that slice does not change the original array but splice does.