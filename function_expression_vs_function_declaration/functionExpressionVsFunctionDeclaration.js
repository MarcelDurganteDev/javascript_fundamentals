/* ======  Function Expressions & Declarations  =====


Function declarations/statement *** function(){} *** are HOISTED!
You can call it before writing it.
You can only use it after the entire script has been parsed/analised/evaluated.
It CAN NOT be used as an argument to another function.
It CAN NOT be anonymous.

Function expressions are not HOISTED.  
You CAN'T call it before writing it.
You can use it immediately after it is defined/written.
It can be used as an argument to another function.
It can be anonymous. 

NOTE: all function arguments must be expressions. 

a) Expressions produce a value, and that value will be passed into the function. 
b) Statements don't produce a value, and so they can't be used as function arguments.

*/

function funcDeclaration() {
  return "A function declaration";
}

let funcExpression = function () {
  return "A function expression";
};

// ==============   Function declarations, Function expressions and Named Function expressions   =================

// A function declaration is a statement

function foo(func) {
  return func.name;
}

// A named function expression is an expression, like an anonymous function, but it has a name. You declare the name of the function when you write the function keyword, followed by the function name. For example:

function myFunction() {
  // do something
}

function add(a, b) {
  return a + b;
}

/* Whenever you declare a function where Javascript is expecting a value, it will attempt to treat it as a value, if it can’t use it as a value, an error will be thrown.
  
  Whereas declaring a function at the global level of a script, module, or top level of a block statement (that is, where it is not expecting a value), will result in a function declaration. */

// Examples:

if (condition) {
  function foo() {} // top level of block, declaration
}

function foo() {} //global level, declaration

function foo() {
  function bar() {} //top level of block, declaration
}

function foo() {
  return function bar() {}; // named function expression
}

foo(function () {}); // anonymous function expression

function foo() {
  return function bar() {
    function baz() {} // top level of block, declaration
  };
}

function () {} // SyntaxError: function statement/declaration requires a name
  
  if (true){
    function () {} //SyntaxError: function statement/declaration requires a name
  }

// ===========  Converting Expressions to Statements: Expression Statements

// Is anything ever simple and straightforward with Javascript

2 + 2; //expression statement
foo(); //expression statement

// You can convert expressions to expression statement, just by adding a semi-colon to the end of the line or allowing automatic semi-colon insertion to do the work. 2+2 itself is an expression but the complete line is a statement.

2 + 2; // on its own is an opposition

foo(2 + 2); //so you can use it anywhere a value is expected

true ? 2 + 2 : 1 + 1;

function foo() {
  return 2 + 2;
}

2+2; //  expression statement
foo(2+2;) //syntaxError 

// ===========  Semi-colon vs Comma operator

// With semi-colon, you can keep multiple statements on the same line

const a; function foo () {}; const b = 2

// The comma operator allows you to chain multiple expression, returning only the last expression

console.log((1 + 2, 3, 4)); //4

console.log((2, 9 / 3, function () {})); // function (){}

console.log((3, true ? 2 + 2 : 1 + 1)); // 4

// Sidenote: one way to tell the Javascript engine to expect a value is via parentheses, (), without the parentheses, each expression will be treated as an argument to console.log.

function foo() {
  return 1, 2, 3, 4;
};

foo(); //4

// All the expressions will be evaluated from left to right, and the last one will be returned.

/* IIFEs (Immediately Invoked Function Expressions)
  
An anonymous function can be an expression, if we use it where Javascript is expecting a value, that means we if we can tell Javascript to expect a value with parentheses, we can pass an anonymous function as that value. */

function () {}

// So while the snippet above is invalid, the snippet below is valid

(function () {})
// this returns function () {}

// If putting a anonymous function inside a parentheses immediately returns the same anonymous function, that means we can call it straight away, like this:

(function () {
    //do something
})()

// So, these are possible

(function () {
    console.log("immediately invoke anonymous function call");
})() // "immediately invoke anonymous function call"

or;

(() => {
  console.log("immediately invoked anonymous arrow function call");
})(function () {
  return 3;
})(); // 3

console.log(
  (function () {
    return 3;
  })()
) // 3
  
//you can also pass an argument to it

(function (a) {
    return a;
})("I'm an argument"); // I'm an argument

//Object literals vs Block Statements

// Sidenote: this is valid Javascript

r: 2 + 2; // valid

foo();

const foo = () => {};

//The above are sequence of statements in the global scope that will be parsed as valid Javascript and executed. The r is what you’ll call a label, and they are mostly useful in breaking loops. Example:

loop: {
  for (const i = 0; i < 2; i++) {
    for (const n = 0; n < 2; n++) {
      break loop; //breaks outer loop and stops entire loop
    }
  }
}

// You can prepend a label to any expression or expression statement, note that you not are creating a variable lab by doing this:

lab: function a() {}

console.log(lab); //ReferenceError: lab is not defined

// Curly braces, {}, allow you to group expression statements and statements. So you can write,

{
  var a = "b";
  func();
  2 + 2;
} // 4

/* If you paste the above in your browsers console, it will return 4 and when you do console.log(a), you will get string b. You can call that a block statement, which is different from the object literal you might be used to. */

console.log({ a: "b" }); // {a: 'b'}

// console.log({var a = "b", func(), 2+2}) // SyntaxError

// const obj = {var a = "b", func(), 2+2} // SyntaxError

/* You cannot use a block statement as a value or expression, because console.log is a function, it cannot accept a statement as an argument. It can accept an object literal though.
  
  I hope you understood all I explained above, cause the next snippet below might throw you off. */

{} + 1; //1

{ 2 } + 2; // 2

{ 2 + 2 } + 3; // 3

{ 2 + 2 } - 3; // -3

/* You might expect it to throw either a syntax error or to return 1, 4, 7 respectively. 
  1. Statements aren’t supposed to return anything, they can’t be used as values. 
  2. JS attempts to convert the operands of the + operator to a number or string
  3. If it can't, whatever is returned by the block statement is coerced to 0 as the operand. */
