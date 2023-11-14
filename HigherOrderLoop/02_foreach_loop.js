const coding = ['js','ruby','java','python','cpp']

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

function printme(item){
    console.log(item);
}
// coding.forEach(printme)

coding.forEach( (item , index , arr) => {
    console.log(item , index , arr);
})
// for each parameter has value , index and arr access