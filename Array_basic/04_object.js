
// ====  Object Constructor ====

/* 
The standard way to create an "object type" is to use an object constructor function. */

 // ====== object literal =====

 var person = {
    name:"Steve",
    age:"35",
 }

/*This allows you to create only a single object.

Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type. */





 // ========== object constructor ====

 function personProps(name,age,color){
    this.name = name;
    this.age = age;
    this.favColor = color;
 }
//The standard way to create an "object type" is to use an object constructor function.

 /* The above function (personProps) is an object constructor, which takes parameters and assigns them to the object propert */

  // ====== This Keyword =====

  /* 
The this keyword refers to the current object.

Note that this is not a variable. It is a keyword, and its value cannot be changed.*/







/*
Once you have an object constructor, you can use the new keyword to create new objects of the same type.
 */


let p1 = new personProps("Robert Steve" , 34 ,"skyblue")

let p2 = new personProps("Dr. Adam" , 54 ,"black")


/* 
1. new keyword is used to creat an instance of an object.

2. p1 and p2 are now the object of the person type .Their properties are assigned to the corresponding values. */

console.log(p1.name)
console.log(p2['favColor'])
