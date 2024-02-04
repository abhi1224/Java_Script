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

function addNumber(){
    let ans = 0
    for (let index = 0; index < arguments.length; index++) {
        ans += arguments[index];
        
    }
    return ans
}
// arguments include all the number passing by calling function

let result = addNumber(34,56,76)

let result2 = addNumber(2,4,5,7,8,6,5,3)