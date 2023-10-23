

const mySymbol = Symbol('key1') // Use of symbol in object : [mySymbol]

const jsUser = {
    name:'Robert',
    age:18,
    location:'jaipur',
    email:'test@gamil.com',
    isLogedIn : false,
    lastLoginDays:['Monday' , 'Saturday'],
    // mySymbol:'mykey1',  //string data type 
    [mySymbol]:'mykey1' // Symbol data type 
}

// console.log(typeof (jsUser.mySymbol)); // this will through a string type but we declare  mySymbol as a Symbol  data type
console.log(typeof jsUser[mySymbol]) ; // we donot use quetos for the symbol data type 



console.log(jsUser.email)
// console.log(jsUser.['email']);

console.log(jsUser.lastLoginDays);
// console.log(jsUser['lastLoginDays']);


/* Changing the value */

jsUser.name = 'Ramesh'
// Object.freeze(jsUser) // this will freeze the object value and we can not change the vlaue after this

jsUser.age = 87; // the vlaue will not change because of the Object.freeze
console.log(jsUser)


jsUser.greeting = function()
{
    console.log("Hello js users ");
}

jsUser.greeting2 = function()
{
    console.log(`Hello js users ,${this.name}` );
}

jsUser.greeting();
jsUser.greeting2();
