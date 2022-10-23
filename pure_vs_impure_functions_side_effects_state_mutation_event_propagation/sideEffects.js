/* Side effects are not only limited to state manipulation, interacting with the I/O, database, log system, APIs and anything else that can be controlled, has a side effect.

Some side effects are beneficial, and desired, such as the setTimeout() function, equivalent to sleep() and wait() in multi-threaded applications. Side effects aren’t a bad thing, but when hidden, or not otherwise obvious what’s happening, they can be dangerous. 

A side effect is the modification of state through the invocation of a function or expression. In order for a function or expression to have a side effect, the state it modifies should be out of its local scope. Such as passing an object by reference through functions to be mutated and performing I/O operations.

The presence of side effects in code is neither a good or bad thing. They are inevitable in some cases, such as when working with languages that follow the imperative programming paradigm, or when mutating state through necessity.

In functional programming, functions are often designed to avoid side effects, with the result of most function calls being a derived value from the input parameters. The lack of side effects makes it easier to do formal verifications, and tends to lean towards an easier method of testing. */

/* Side Efffects of Shared States

Cascading function problem: in which the order and even timing of function calls has to be changed as the state changes. This is typically a side effect of changing the order of functions calls, which causes a cascade of errors.  */

const state1 = {
  myVal: 1,
};

const doSomething = () => (state1.myVal += 1);
const handleSomeEvent = () => (state1.myVal += 2);

doSomething(); // state.myVal = 2;
switch (state1.myVal) {
  case 2:
    handleSomeEvent(); // state.myVal = 4;
    break;
}

console.log(state1); // { myVal: 4 }

/* If we don’t call doSomehing() before our switch statement, handleSomeEvent() doesn’t even get called, and the same thing happens when the invocation of doSomething() is shifted after the switch statement. */

const state2 = {
  myVal: 1,
};

const doSomething2 = () => (state2.myVal += 1);
const handleSomeEvent2 = () => (state2.myVal += 2);

switch (state2.myVal) {
  case 2:
    handleSomeEvent(); // never gets called
    break;
}

doSomething(); // state2.myVal = 2;

console.log(state2); // { myVal: 2 }

/* Introducing pure functions following the functional programming paradigm helps us avoid shared state, thus avoiding issues such as cascading function errors, potential race conditions, and situations where state is stale. */

/* In the example bellow, using the object spread, we’re able to copy the values of the input onto our output state, while performing the mutations to the new object that we need, rather than mutating the values of state directly. This is a common pattern in JavaScript for copying values in one object into another, such as setting default values.

The order of function calls still matter, as the result can change depending in which order you call the functions in. The function composition (taking two functions to produce a single function) of f and g → f(g(x)) does not always equal to composition of g(f(x)). In our example bellow it does, but what if g performs a multiplication rather than an addition? f(g(x)) ≠ g(f(x)). */

const state = {
  myVal: 1,
};

const f = (state) => ({
  ...state,
  ...{
    myVal: state.myVal + 1,
  },
});
const g = (state) => ({
  ...state,
  ...{
    myVal: state.myVal + 2,
  },
});

const newState = f(state);
console.log(state); // { myVal: 1 }
console.log(newState); // { myVal: 2}

const finalState = g(f(state));
console.log(state); // { myVal: 1 }
console.log(finalState); // { myVal: 4 }

// ________________________________________________________________________________________________



/* There could also be confusion between side effects and pure functions - a function that is (a) idempotent, (b) has no side effects, and (c) will return the same output for the same parameters, every time.
 */
// pure function
function f0() {
  let x = 0;
  return ++x;
}
/* Although the code sample above does not look like it is pure, it actually is. The value of x can only be observed in other invocations of f(), and f() does not communicate or cache the value of x to its environment.

A function is not pure and has no side effects, if the result of the invocation of the function is different each time without modifying state.
 */
// non-pure function  
function z() {
  let x = Math.random() * 100;
  return ++x;
}
/* A function is both not pure and has side effects if during the invocation, it modifies state. This can be state that is passed to it as an input parameter, or state that it can access through its closure scope. */

let counter = 1;
function increment() {
  ++counter;
}
increment(); // counter is now 2

let val = 2;
function square(x) {
  return x *= x;
}

square(2); // val = 4

/* While classes colocate functionality and bound together under the namespace of the object class, functional programming tends to reuse a collection of functional utilities to process data.

Typically in functional programming, any type of data is fair game. For example, being able to use the map utility function to map over objects, strings, arrays and other data types. This is achieved by using higher-order functions, which is a function that takes a function as an argument, returns a function, or both.

JavaScript has first class functions, which allows us to treat functions as data and assign them to variables, pass them as arguments, return them from other function calls, etc. */
