// Exercise 2: Convert Values to Different Types

/*
Convert the following values using appropriate constructors:

Convert "50" (string) into a number.
Convert 0 (number) into a boolean.
Convert true (boolean) into a string.
Convert { key: "value" } (object) into a string.
Convert "123abc" (string) into a number. What happens?
Try writing JavaScript code for each and print the results using console.log().

*/

// Convert "50" (string) into a number.
console.log(Number("50"))

// Convert 0 (number) into a boolean.
console.log(Boolean(0));

// Convert true (boolean) into a string.
console.log(String(true));


// Convert "123abc" (string) into a number. What happens?
console.log(Number("123abc")); // NaN





// Convert { key: "value" } (object) into a string.
console.log(String({ key: "value" }));

//Key Takeaways
// ✅ String(obj) → "[object Object]" (default behavior)
// ✅ Use JSON.stringify(obj) → {"key":"value"} (for a readable string)

console.log(JSON.stringify({key:"value"}))

// Exercise 3: Check the Truthiness

let value = ""; // Change this to test different values
if (Boolean(value)) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Exercise 4 :  Create an Object and Access Properties

let student = Object({
    course: "Learn JavaScript",
    name: "John",
    age: 18,
    isEnrolled: true
})

const {course, name, age, isEnrolled} = student;
console.table({course, name, age, isEnrolled});