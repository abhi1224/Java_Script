
/*
const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)


// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros) // concat Return a new array
// console.log(allHeros)

// const allNewHeros = [...marvel_heros, ...dc_heros] // same as concat
// console.log(allNewHeros);

const another_Array = [1,2,3,[4,5,6] ,7 , [6,7,[4,5]]]
// const bind_another_Array = another_Array.flat(Infinity) // mix all the value in a single array 
// console.log(bind_another_Array);

console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)) 
*/

const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros) // push the array as a single element

// const newHeros = marvel_heros.concat(dc_heros) // return a new array
// console.log(newHeros);

// spread operator
const allNewHeros = [...marvel_heros, ...dc_heros] // same as concat
// console.log(allNewHeros);

const another_Array = [1,2,3,[4,5,6] ,7 , [6,7,[4,5]]]
const bind_another_Array = another_Array.flat(Infinity) // mix all the value in a single array

// console.log(bind_another_Array);

console.log(Array.isArray("abhishek")); // check the type of the array
console.log(Array.from("abhishek"));// convert the string into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)) // create an array of the given values