const score = 400
console.log(typeof score)



const balance = new Number(100) 
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // after decimal  2 value

const number = 123.4477
console.log(number.toPrecision(4));

const num = 1000000
console.log(num.toLocaleString('en-IN'));


// ====================== Maths =============================

console.log(Math.abs(-56))
console.log(Math.round(4.3))
console.log(Math.ceil(4.2)) // 5  upper value 
console.log(Math.floor(4.8)) // 4  lower value


console.log(Math.random()) // the value between 0 to 1
console.log(((Math.random()*10) + 1))

console.log(Math.floor((Math.random()*10) + 1))

const min = 10
const max = 20

console.log(Math.floor((Math.random()* (max - min + 1)) + min)) // value between 10 and 20




