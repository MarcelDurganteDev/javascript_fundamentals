/* =================  undefined
The global undefined property represents the primitive value undefined. */

function test(t) {
    if (t === undefined) {
      return "Undefined value!";
    }
    return t;
  }
  
  let x;
  let x2 = 100;
  
  console.log(test(x));
  // expected output: "Undefined value!"
  
  console.log(test(x2));
  // expected output: 100

/*   A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned. */

/* ===============  Examples  ====================
Strict equality and undefined

You can use undefined and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable x is not initialized, and the if statement evaluates to true.
 */

let x3;
if (x3 === undefined) {
  // these statements execute
  console.log('g');
} else {
  // these statements do not execute
  console.log('j');
}
// output:  g

/* typeof operator and undefined
Alternatively, typeof can be used: */

let x4;
if (typeof x4 === 'undefined') {
  // these statements execute
  console.log('hey');
}
// output: hey

/* Description

`undefined` is a property of the *global object*. That is, it is a variable in global scope. The initial value of `undefined` is the primitive value `undefined'

In all non-legacy browsers, `undefined` is a non-configurable, non-writable property. (Even when this is not the case, avoid overriding it.)

A variable that has not been assigned a value is of type `undefined`. A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value. A function returns `undefined` if a value was not `returned' (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)`.

Examples  

Strict equality and undefined

You can use `undefined` and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable `x` is not initialized, and the `if` statement evaluates to true.
 */

let x5;
if (x5 === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}

/*   =============  typeof operator and undefined  =============

Alternatively,typeof */

let x6;
if (typeof x6 === 'undefined') {
  // these statements execute
}

/* One reason to use typeof is that it does not throw an error if the variable has not been declared. */

//  x has not been declared before
if (typeof x === 'undefined') { //  evaluates to true without errors
  //  these statements execute
}

if (x === undefined) { //  throws a ReferenceError

}

/* However, there is another alternative. JavaScript is a statically scoped language, so knowing if a variable is declared can be read by seeing whether it is declared in an enclosing context.

The global scope is bound to the global object, so checking the existence of a variable in the global context can be done by checking the existence of a property on the *global object*, using the 'in' operator, for instance: */

let etc;

if (etc in window) {
  //  these statements execute only if x is defined globally
  console.log('is defined in the global object')
} else {
  console.log('not defined');
}
// output if etc is declared:  'is defined'
// output if etc id not declered: Uncaught ReferenceError: etc is not defined
// else 'not defined' is not logged ( I DO NOT KNOW WHY?????~!!!!!!! )

/* ================  void operator and undefined  =====================

The void operator is a third alternative. */

let x7;
if (x7 === void 0) {
  //  these statements execute
}

/* //  y has not been declared before
if (y === void 0) {
  //  throws Uncaught ReferenceError: y is not defined
} */