const student = Object({
    name: "Robert Steve",
    age: 21,
    grade: "A",
    introduce: function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
        
    }
})

console.log(`Name : ${student.name} Age: ${ student.age}  Grade: ${student.grade}`);

student.introduce()