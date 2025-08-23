const PI = 3.14159; // Block-scoped
// PI = 3.15; // Error: cannot reassign
// const PI = 3.14; // Error: cannot redeclare

const user = { name: "Alice" };
user.name = "Bob"; // Allowed - object properties can change
// user = { name: "Charlie" }; // Error - cannot reassign entire object

// - Default choice for most variables
// - Makes code more predictable
// - Prevents accidental reassignments
// - Signals intent that value shouldn't change