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

