// A call stack is a data structure that uses the Last In, First Out (LIFO) principle to 'temporarily store' (func param n vars form a 'stack frame' ( a memory location in the stack )) and manage function invocation (call).

// Sumary: Call Stack/LIFO/Temp Store/Stack Frame/Memory in the Stack

// EXAMPLE:  for the code below a stack is printed showing how the functions are stack on top each other

/* function firstFunction() {
  throw new Error("Stack Trace Error");
}

function secondFunction() {
  firstFunction();
}

function thirdFunction() {
  secondFunction();
}

thirdFunction(); */

/* OUTPUT:

Error: Stack Trace Error
    at firstFunction (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:4:11)
    at secondFunction (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:8:5)
    at thirdFunction (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:12:5)
    at Object.<anonymous> (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:15:3) 
*/

/* 
The firstFunction() (which is the last function that got into the stack, and is popped out to throw the error), followed by the secondFunction(), and then the thirdFunction() (which is the first function that gets pushed into the stack when the code is executed). 
*/

// EXAMPLE 2:

function firstFunction() {
  console.log("Hello from firstFunction");
}

function secondFunction() {
  firstFunction();
  console.log("The end from secondFunction");
}

secondFunction();
/* OUTPUT:

Hello from firstFunction
The end from secondFunction 
*/

/* 
This is what happens when the code is run:

1. When secondFunction() gets executed, an empty stack frame is created. It is the main (anonymous) entry point of the program.
2. secondFunction() then calls firstFunction()which is pushed into the stack.
3. firstFunction() returns and prints “Hello from firstFunction” to the console.
4. firstFunction() is pop off the stack.
5. The execution order then move to secondFunction().
6. secondFunction() returns and print “The end from secondFunction” to the console.
7. secondFunction() is pop off the stack, clearing the memory. 
*/

// ========== What causes a stack overflow?  ==============

/* 
When there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error. 
*/

// Example:

function callMyself() {
  callMyself();
}

callMyself();

/* OUTPUT:

/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73
    callMyself();
    ^

RangeError: Maximum call stack size exceeded
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5)
    at callMyself (/home/marcel/projects-ubuntu/javascript_fudamentals_sage/callStack.js:73:5) 
*/

/* ========  IN SUMMARY !!!!!!!!!!!!!!!!!!!!!!!  ========

The key takeaways from the call stack are:

1. call-stack is a data structure
2. It is single-threaded. Meaning it can only do one thing at a time.
2. Code execution is synchronous.
3. A function call creates a stack frame that occupies a temporary memory.
4. It works as a LIFO — Last In, First Out data structure. 
5. It has two methods: push and pop.

when you run a function in Javascript the engine pushes that function into the Call Stack.
The first thing that gets pushed is main() (or global()), the main thread of execution of your Javascript program.
When a function ends executing it gets popped from the Call Stack.

*/

//TODO:
//Is important to remark, setTimeout changes the callStackFlow
console.log("test1")
setTimeout(()=> console.log("test2"))
console.log("test3");

//expected result
// test1
// test3
// test2