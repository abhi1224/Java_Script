/*
Exercise 5: Custom Object with Multiple Methods
👉 Create an object calculator with the following methods:

add(a, b): Returns the sum of a and b.
subtract(a, b): Returns the difference between a and b.
multiply(a, b): Returns the product of a and b.
divide(a, b): Returns the quotient of a and b (handle division by zero).
*/

let calculator = {
    add: function(a, b){
        return a+b;
    },
    subtract: function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        if(b === 0){
            return "Division by zero is not allowed"
        }
        return a/b;
    }
}

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(6, 7));  // 42
console.log(calculator.divide(8, 2));    // 4
console.log(calculator.divide(10, 0));   // "Cannot divide by zero"


/*
Bonus Challenge: Advanced Object

*/

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    fuel: "Petrol",
    getInfo: function(){
        console.log(`This is a ${this.year} ${this.brand} running on ${this.fuel}`);
        
    },
    start: function(){
        console.log(`the ${this.brand} ${this.model} is starting ...`);
        
    }
}

car.getInfo();
car.start();
