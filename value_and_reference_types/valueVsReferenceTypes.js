/* ============== Primitive Types & Reference Types in JavaScript

SUM UP:   PRIMITIVES ARE COPIED BY THEIR VALUE
          OBJECTS ARE COPIED BY THEIR REFERENCE
*/


let q = 10;
let r = 'hi';
let s = q;
s = s + 1; 

console.log(q);  // 10
console.log(s);  // 11

// variable    value   
//   q          10      
//   r         'hi'        
//   s          10 after then s + 1 = 10

//   

let u = 10;
let v = 'hi';
let c = [1,2];
let d = c;
d.push(3);

console.log(c); // [1,2,3]
console.log(d); // [1,2,3]

// variable    value    |  address     value
//   u          10      |   0x01      [1,2,3]
//   v         'hi'        / /
//   c        <0x001>    / /
//   d        <0x001>    /


// both c and d are pointing to the same address to changes in c or d affect both as they are copied by reference

//  ==============  Now let's overwrite the reference of d1 assigning a new variable to it so c1 and d1 will now reference to different addresses in memory so one change in one or the other will not affect both
let u1 = 10;
let v1 = 'hi';
let c1 = [1,2];
let d1 = c1;
d = [3, 4, 5]

console.log(c); // [1,2]
console.log(d); // [3,4,5]

// variable    value    |  address     value
//   u1          10     |   0x01      [1,2]
//   v1         'hi'      /  0x02     [3, 4, 5]
//   c1        <0x01>   /   /
//   d1        <0x02>     /






/*
An explanation of JavaScript's pass-by-value, which is unlike pass-by-reference from other languages.

Facts:

JavaScript has 2 kinds of variable types: primitive and reference.
A fixed amount of memory is reserved after creation of every variable.
When a variable is copied, it's in-memory value is copied.
Passing a variable to a function via a call also creates a copy of that variable.

================  Primitive Types
The in-memory value of a primitive type is it's actual value (e.g. boolean true, number 42). A primitive type can be stored in the fixed amount of memory available. */

/* null
undefined
Boolean
Number
String

Primitive types are also known as: scalar types or simple types. */

/*
==================  Reference Types

A reference type can contain other values. Since the contents of a reference type can not fit in the fixed amount of memory available for a variable, the in-memory value of a reference type is the reference itself (a memory address).

Array
Object
Function

Reference types are also known as: complex types or container types.
 */

// Code Examples
// Copying a primitive:

var a = 13         // assign `13` to `a`
var b = a          // copy the value of `a` to `b`
b = 37             // assign `37` to `b`
console.log(a)     // => 13
// The original was not changed, we can only change the copy.

// Copying a reference:

var a = { c: 13 }  // assign the reference of a new object to `a`
var b = a          // copy the reference of the object inside `a` to new variable `b`
b.c = 37           // modify the contents of the object `b` refers to
console.log(a)     // => { c: 37 }
// The original was also changed, since the reference got copied.

var o = new Object();
console.log(o);