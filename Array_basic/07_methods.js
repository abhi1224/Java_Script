/* ============= Methods =========== 


Methods are functions that are stored as object properties.
A method is a function, belonging to an object. It can be referenced using the this keyword.

The this keyword is used as a reference to the current object, meaning that you can access the object's properties and methods using it.

Defining methods is done inside the constructor function.

*/

function person (name , age) {
    this.name = name;
    this.age = age;
    this.changeName = function(name) {
        this.name = name;
    }
}

var p = new person('Robert' , 34);
p.changeName('Dravid');
console.log(p['name']);

/*
 In the example above, we have defined a method named changeName for our person, which is a function, that takes a parameter name and assigns it to the name property of the object.
 this.name refers to the name property of the object.
 */

 // You can also define the function outside of the constructor function and associate it with the object.

 function personProp(name , age) {
    this.name =  name;
    this.age = age;
    this.yearOfBirth = bornYear;
 }

 function bornYear() 
 {
    return (2023 - this.age);
 }

 var p2 = new personProp("Punit superstar" , 22)

 console.log(p2.yearOfBirth())