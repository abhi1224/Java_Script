const myName = document.getElementById('my-name')
const button = document.getElementById('my-btn')

function userName(name) {

    function sayName() {
       console.log(name); 
    }
    // sayName() // closure
    return sayName;
}

let closure = userName('Abhishek')
closure()

// curryring in javascript

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

const add = a => b => c => a + b + c;

console.log(add(2)(3)(5));

// function sendingEmail(to){
//     return function(subject){
//         return function (body){
//             console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
//         }
//     }
// }

// ES6 syntax
const sendingEmail = to => subject => body => console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);

let step1 = sendingEmail('abhishek27501@gmail.com')
let step2 = step1('New Order Conformation')
step2('Hey Abhishek ! Here is something for you.')


