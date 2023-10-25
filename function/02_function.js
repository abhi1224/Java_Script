//  ... rest operator  (pass multiple values)

function calculateCartPrice(a, b,...num1)
{
    return num1
}

console.log(calculateCartPrice(34));
console.log(calculateCartPrice(34 , 45)); // use rest operator
console.log(calculateCartPrice(34 , 45, 33,45));


const user = {
    username:'Robert',
    price:344
}


// passing object to function 

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username:'sam',
    price:499
})

const myNewArray = [200 ,400 ,  700 , 800]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))