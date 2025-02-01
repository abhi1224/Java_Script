const course = {
    coursename: 'React',
    price: 1000,
    courseInstructor: 'Ramesh Babu'
}

// destructuring
const {courseInstructor} = course;
console.log(courseInstructor);


// destructuring with alias
const {courseInstructor:instructor} = course;
console.log(instructor);

// destructuring with multiple values
const {coursename, price, courseInstructor : instru} = course
console.table({coursename, price, instru});
