
function sayMyName(){
    console.log('a');
    console.log('b');
    console.log('h');
    console.log('i');
    console.log('s');
    console.log('h');
    console.log('e');
    console.log('k');
}

// sayMyName() // calling function

function addTwoNumber(number1 , number2)
{
    console.log(number1 + number2)
}

function sum(number1 , number2)
{
    return number1 + number2
}

// addTwoNumber(3,5)
// const result  = sum(3,5)
// console.log("Result: " , result);  


// default value of firstname is 'abhi'
function name (firstname = 'abhi')
{
    console.log(firstname)
}
name('verma')
name()
