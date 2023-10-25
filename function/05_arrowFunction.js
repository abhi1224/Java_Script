const user = {
    username:'Robert Steve',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website.`);
    }
}
// this will refer the current contest(values)

// user.welcomeMessage()
user.username = 'sam'
// user.welcomeMessage()

// console.log(this); 


// function person(){
//     let username = 'abhi'
//     console.log(this.username);
// }

// person()


// ========== Arrow Function ========
const person = () =>{
    let username = 'Robert Steve'
    console.log(this);
}
person()

// const sumofTwo = (num1 , num2) =>{
//     return num1 + num2
// }
// explicitly return 

const sumofTwo = (num1 , num2) => (num1 + num2)
// implicitly return

console.log(sumofTwo(3 , 5));