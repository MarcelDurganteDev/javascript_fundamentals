/* 

"In JavaScript, BigInt is a numeric data type that can represent integers in the arbitrary precision format. 
In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums."(Mdn)

"BigInt is a primitive wrapper object used to represent and manipulate primitive bigint values — which are too large to be represented by the number primitive."


*/


const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER)
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n
// ↪ 18014398509481982n

const subtr = multi - 10n
// ↪ 18014398509481972n

const mod = multi % 10n
// ↪ 2n

const bigN = 2n ** 54n
// ↪ 18014398509481984n

bigN * -1n
// ↪ -18014398509481984n


const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort() // default sorting behavior
// ↪  [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b)
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value

// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
// ↪  [ -12n, 0, 0n, 4n, 4, 6, 10 ]

/* ============== BigInt type  ===============

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the constructor.

You can obtain the largest safe value that can be incremented with Numbers by using the constant Number.MAX_SAFE_INTEGER. With the introduction of BigInts, you can operate with numbers beyond the Number.MAX_SAFE_INTEGER.

This example demonstrates, where incrementing the Number.MAX_SAFE_INTEGER returns the expected result: */

// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true because both are 9007199254740992

/* You can use the operators +, *, -, **, and % with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

A BigInt behaves like a Number in cases where it is converted to boolean: if, ||, &&, Boolean, !.

BigInts cannot be operated on interchangeably with Numbers. Instead a TypeError will be thrown. */

//  ===========  NaN   ====================

/* NaN ("Not a Number") is typically encountered when the result of an arithmetic operation cannot be expressed as a number. 
It is also the only value in JavaScript that is not equal to itself. */
