// Arithmetic Operators
let a = 10;
let b = 3;
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponent:", a ** b);      // 1000

// Assignment Operators
let x = 5;
x += 2; // x = x + 2
console.log("x after +=:", x);

// Comparison Operators
console.log(5 == '5');   // true (loose equality)
console.log(5 === '5');  // false (strict equality)
console.log(5 != '5');   // false
console.log(5 !== '5');  // true
console.log(10 > 5);     // true
console.log(10 <= 10);   // true

// Logical Operators
let p = true;
let q = false;
console.log(p && q); // false
console.log(p || q); // true
console.log(!p);     // false

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote?", canVote);
