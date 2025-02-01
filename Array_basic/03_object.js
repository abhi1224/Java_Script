
// JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.

// Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons.


// === object literal===

let person = {
    name: "Robert",
    age:32,
    favColor: "blue",
    height: 123
}


// accessing object elemet using objectName.methodName()
// console.log(person.favColor)
// // or
// console.log(person['favColor'])



// ====== object constructor ====
// Nested object
const regularUser = {
    email : "some@gmail.come",
    fullname :{
        userfullname:{
            firstname: "abhishek",
            lastname:"verma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname?.firstname); // optional chaining operator

const obj1 = {1: "abhishek", 2: "verma"}
const obj2 = {3: "ram", 4: "shyam"}

// const obj3 = Object.assign(obj1,obj2) // this will change the original object
// console.log(obj1);
// console.log(obj3);

    // OR   

// const obj3 =  Object.assign({}, obj1,obj2) // this will not change the original object
// console.log(obj1);
// console.log(obj3);

    // OR

const obj3 = {...obj1, ...obj2} // this will not change the original object
// console.log(obj1);
// console.log(obj3);



// Important Methods of object
console.log(Object.keys(obj3)); // return the keys of the object (return an array)
console.log(Object.values(obj3));// return the values of the object (return an array)
console.log(Object.entries(obj3)); // return the key value pair of the object (return an array)
console.log(obj3.hasOwnProperty(1)); // return true if the key is present in the object otherwise false



const user = [
    {
        id: 1,
        name: "abhishek",
    },
    {
        id: 1,
        name: "abhishek",
    },
    {
        id: 1,
        name: "abhishek",
    },
    {
        id: 1,
        name: "abhishek",
    }
]

console.log(user[0].name);


