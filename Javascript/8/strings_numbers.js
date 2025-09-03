// ==========================
// 5. Strings and Numbers
// ==========================

// --- String Methods ---
let text = "Hello JavaScript";

// length
console.log("Length:", text.length); // 15

// toUpperCase()
console.log("Uppercase:", text.toUpperCase()); // HELLO JAVASCRIPT

// slice(start, end)
console.log("Slice (0,5):", text.slice(0, 5)); // Hello

// split(separator)
let words = text.split(" ");
console.log("Split:", words); // [ 'Hello', 'JavaScript' ]


// --- String Interpolation & Concatenation ---
let name = "Asish";
let age = 21;

// Concatenation
console.log("Concatenation: " + name + " is " + age + " years old.");

// Template Literals
console.log(`Template Literal: ${name} is ${age} years old.`);


// --- Number Methods ---
let num = 12.3456;

// toFixed()
console.log("toFixed(2):", num.toFixed(2)); // "12.35" (rounds off)

// parseInt()
console.log("parseInt('100'):", parseInt("100"));   // 100
console.log("parseInt('12.9'):", parseInt("12.9")); // 12


// --- Math Object ---
console.log("Math.floor(4.9):", Math.floor(4.9));   // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));     // 5
console.log("Math.round(4.5):", Math.round(4.5));   // 5
console.log("Math.max(10, 20, 5):", Math.max(10, 20, 5)); // 20
console.log("Math.min(10, 20, 5):", Math.min(10, 20, 5)); // 5

// Random number between 0 and 1
console.log("Random (0-1):", Math.random());

// Random number between 1 and 10
console.log("Random (1-10):", Math.floor(Math.random() * 10) + 1);
