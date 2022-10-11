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