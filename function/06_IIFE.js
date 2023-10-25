// IIFE : Immediately Invoked Function Expressions

(function Db(){
    console.log(`DB CONNECTED`);
})();

// () () and use of ;

(() =>{
    console.log(`DB CONNECTED TWO`);
})();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('robert')