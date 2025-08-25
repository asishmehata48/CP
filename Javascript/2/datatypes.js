// 1. String
let name = "Asish";
console.log("String:", name);
console.log("Type:", typeof name);

// 2. Number
let age = 21;
console.log("Number:", age);
console.log("Type:", typeof age);

// 3. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber);
console.log("Type:", typeof bigNumber);

// 4. Boolean
let isStudent = true;
console.log("Boolean:", isStudent);
console.log("Type:", typeof isStudent);

// 5. Undefined
let notAssigned;
console.log("Undefined:", notAssigned);
console.log("Type:", typeof notAssigned);

// 6. Null
let emptyValue = null;
console.log("Null:", emptyValue);
console.log("Type:", typeof emptyValue); // returns 'object' (JavaScript quirk)

// 7. Symbol (unique and immutable)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);
console.log("Type:", typeof uniqueId);

// ---------- Non-Primitive (Reference) Data Types ----------

// 8. Object
let person = {
    name: "Asish",
    age: 21,
    isStudent: true
};
console.log("Object:", person);
console.log("Type:", typeof person);

// 9. Array (special kind of object)
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits);
console.log("Type:", typeof fruits);

// 10. Function (also an object type)
function greet() {
    return "Hello, World!";
}
console.log("Function:", greet);
console.log("Type:", typeof greet);

// 11. Date (built-in object)
let today = new Date();
console.log("Date:", today);
console.log("Type:", typeof today);

// 12. RegExp (Regular Expression object)
let pattern = /hello/i;
console.log("RegExp:", pattern);
console.log("Type:", typeof pattern);
