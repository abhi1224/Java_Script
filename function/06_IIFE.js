// IIFE : Immediately Invoked Function Expressions

(function Db(){
    console.log(`DB CONNECTED`);
})();

// () () and use of ;

// semicolon is compulsory if you are using IIFE

(() =>{
    console.log(`DB CONNECTED TWO`);
})();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('robert')

// IIFE is used to avoid global scope pollution
// IIFE is used to avoid naming conflicts
// IIFE is used to avoid global variable conflicts
// IIFE is used to avoid global variable overwriting



// return value from IIFE 
let result = (function(a, b) {
    return a + b;
})(5, 3);

console.log(result);

