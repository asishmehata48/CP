let age = 30; // Block-scoped
age = 31; // Can be reassigned
// let age = 32; // Error: cannot be redeclared in same scope

// - When you need to reassign values
// - Block-scoping prevents accidental leaks
// - Better than var for loops and conditionals