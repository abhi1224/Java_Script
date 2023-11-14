const coding = ['js','ruby','java','python','cpp']

// const value = coding.forEach(function (item){
//     console.log(item);
// })


// console.log(value)

// for each loop not return any value

const num = [1,2,3,4,5,6,7,8,9,10]

const newNums = num.filter((num) => num > 4)

const newNums2 = num.filter((num) => {
    return num > 4
})
// when we use { } we have to write return keyword
console.log(newNums2);