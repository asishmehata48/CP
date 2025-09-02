function add(a, b = 5) {
    return a + b;
}

console.log(add(10));     // 15 (b uses default value)
console.log(add(10, 20)); // 30



function multiply(x, y) {
    return x * y;
}

let result = multiply(4, 5);
console.log("Result:", result);


//scoping
// local scope
function test() {
    let localVar = "I am local";
    console.log(localVar);
}
test();
// console.log(localVar); // Error: localVar is not defined


// global scope
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);
}

showGlobal(); // I am global


// block scope
{
    let blockVar = "Inside block";
    console.log(blockVar); // Works
}
// console.log(blockVar); // Error: blockVar is not defined
