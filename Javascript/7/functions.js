function add(a, b = 5) {
    return a + b;
}

console.log(add(10));     // 15 (b uses default value)
console.log(add(10, 20)); // 30
