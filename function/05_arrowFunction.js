const user = {
    username:'Robert Steve',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website.`);
        // console.log(this);        
    }
}
// this will refer the current contest(values)

// user.welcomeMessage()
user.username = 'sam'
// user.welcomeMessage()

// console.log(this); 


// function person(){
//     let username = 'abhi'
//     console.log(this);
// }

// person()


// ========== Arrow Function ========
const per = () => {
    let username = 'Robert Steve'
    console.log(this);
}
per()

// const sumofTwo = (num1 , num2) =>{
//     return num1 + num2
// }
// explicitly return 


// for one line code use this  (we do not need to use return keyword also curly braces)
// const sumofTwo = (num1 , num2) => (num1 + num2)
// implicitly return


// if you want to return object then you have to use ()
const sumofTwo = (num1 , num2) => ({sum:num1 + num2})
console.log(sumofTwo(3 , 5));


// if you have only one argument then you can remove ()
const square = num => num * num
console.log(square(5));

