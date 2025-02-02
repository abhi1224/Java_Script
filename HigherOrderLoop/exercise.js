//1️⃣ Exercise: Get Odd Numbers

let numbers = [10, 15, 20, 25, 30];

// Use filter() to get only odd numbers
let oddNumbers = numbers.filter((item) => (item % 2 != 0));
console.log(oddNumbers);


//2️⃣ Exercise: Convert Prices to USD ($)
let prices = [100, 200, 300];

// Use map() to add a "$" symbol to each price
let priceInUSD = prices.map((item) => `$${item}`);
console.log(priceInUSD); // Expected Output: ["$100", "$200", "$300"]


// 3️⃣ Exercise: Find the Total Price
let cart = [
    { item: "Laptop", price: 1200 },
    { item: "Mouse", price: 50 },
    { item: "Keyboard", price: 100 }
];

// Use reduce() to calculate the total price
let totalPrice = cart.reduce((acc, item) => acc + item.price,0);
console.log(totalPrice);

//4️⃣ Challenge: Get Names of Users Older than 18

let users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 }
];

// Use filter() and map() to get names of users older than 18
let adultUsers = users
                .filter((user) => user.age > 18)
                .map((user) => user.name);
console.log(adultUsers); 