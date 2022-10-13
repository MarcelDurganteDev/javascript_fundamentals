/*  ======================   Booleans - true or false values   ===========================

In computer science, a Boolean is a logical data type that can have only the values true or false.

For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute (such as in if statements) or repeat (such as in for loops). */

true;
false;
let isHappy = true;
console.log(isHappy);  // true
console.log(!isHappy);  // false

/* JavaScript for loop using a BOOLEAN CONDITIONAL

The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed. */

const myNum = 5;
let i = 0
for (i; i < myNum; i++) {
    // code to execute repeatedly if the conditional is true
    console.log('hello');
  }
// output: hello hello hello hello hello

// EXAMPLE 2:

console.log(Boolean(10 > 9)); // true

let x = 0;
console.log(Boolean(x));  // false

/*  ===================  Booleans can also be defined as objects with the keyword new:  =========================
xxxxxxxxxxxxxxxxxxxx  Do not create Boolean objects.  xxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx  The new keyword complicates the code and slows down execution speed.   xxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx   Boolean objects can produce unexpected results:  xxxxxxxxxxxxxxxxxxxxxxx   */

let y = new Boolean(false);
console.log(y); // [Boolean: false]

let x2 = false;
let y2 = new Boolean(false);
console.log(x2);  // false
console.log(y2); // [Boolean: false]

// typeof x2 returns boolean
// typeof y2 returns object