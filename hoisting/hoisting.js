/* console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization

console.log(num); // ReferenceError: Cannot access 'num' before initialization
let num; 

console.log(num); // ReferenceError: num is not defined
num = 6; */

//console.log(num); // Returns 'undefined' from hoisted 'let' declaration (not 6)
let num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.

a = "Cran"; // Initialize a
b = "berry"; // Initialize b

console.log(`${a}${b}`); // 'Cranberry'

// resource: https://www.youtube.com/watch?v=EvfRXyKa_GI