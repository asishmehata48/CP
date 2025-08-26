// ---------- 1. Variables & Scope ----------
let name = "Asish";
const age = 21;
var country = "Nepal";
console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);

// ---------- 2. Operators ----------
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Comparison Operators
console.log("Equal (==):", a == "10");    // true
console.log("Strict Equal (===):", a === "10"); // false
console.log("Not Equal (!=):", a != b);
console.log("Greater than:", a > b);

// Logical Operators
let x = true;
let y = false;
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !x);

// ---------- 3. Control Flow ----------
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else {
    console.log("Grade: B");
}

// Switch Example
let day = 2;
switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    default: console.log("Invalid day");
}

// Loops
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("While Loop:");
let count = 1;
while (count <= 3) {
    console.log(`Count: ${count}`);
    count++;
}

// ---------- 4. Functions ----------
function add(num1, num2) {
    return num1 + num2;
}
console.log("Function add:", add(10, 20));

// Arrow Function
const multiply = (num1, num2) => num1 * num2;
console.log("Arrow function multiply:", multiply(5, 3));

// Default Parameters
function greet(user = "Guest") {
    console.log(`Hello, ${user}!`);
}
greet();
greet("Asish");

// ---------- 5. Arrays & Methods ----------
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // Add at end
console.log("Fruits:", fruits);
fruits.pop(); // Remove last element
console.log("After pop:", fruits);

fruits.forEach(fruit => console.log("Fruit:", fruit));

// Map Example
let numbers = [1, 2, 3, 4];
let squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// Filter Example
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// ---------- 6. Objects ----------
let person = {
    name: "Asish",
    age: 21,
    country: "Nepal",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};
console.log("Person:", person);
person.greet();
