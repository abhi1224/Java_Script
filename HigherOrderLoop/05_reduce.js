  const myNums = [1,2,3]

//  const myTotal =  myNums.reduce(function(acc , currentvalue) {
//     console.log(`acc:${acc} and currentvalue:${currentvalue}`);
//     return acc + currentvalue
//  }, 0) 
// acc:0 and currentvalue:1
//  acc:1 and currentvalue:2
//  acc:3 and currentvalue:3


// const myTotal = myNums.reduce((acc , curr) => {return acc + curr},0)

//  console.log(myTotal);

const shoppingCart = [
    {
        itemName:'js course',
        price:1000
    },
    {
        itemName:'py course',
        price:2000
    },
    {
        itemName:'data science course',
        price:7000 
    },
    
]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price ,0)
// console.log(priceToPay);


const price = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(price);
