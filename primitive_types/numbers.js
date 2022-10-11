// =========== Numbers ===========

// "In javaScript there is not integer, float, etc... IT'S JUST NUMBER"

// "Not all numbers can be represented once we get large numbers because we are given a limited space to store it"

// We may check if numbers are in the 'safe number range' using the built-in function  =============== Number.isSafeInteger(x)  ==================

// "JavaScript numbers are really just floating points as specified by IEEE-754. Due to inadequecies when representing numbers in base-2, as well as a finite machine, we are left with a format that is filled with rounding errors. "

console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity

/* Values outside the range ±(2^-1074 to 2^1024) are automatically converted:

Positive values greater than Number.MAX_VALUE are converted to +Infinity.
Positive values smaller than Number.MIN_VALUE are converted to +0.
Negative values smaller than -Number.MAX_VALUE are converted to -Infinity.
Negative values greater than -Number.MIN_VALUE are converted to -0. */

// ---- Binary ----
/* A binary number is a number expressed in the base-2 numeral system or binary numeral system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one).

The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit, or binary digit. 
*/
/* 
Some new developers to JavaScript do not realize that and believe that if they use 1 it is stored in 64 bits as: 
0000000000000000000000000000000000000000000000000000000000000001
while in fact it’s stored as: 
0011111111110000000000000000000000000000000000000000000000000000
*/

/* for (var i=1; 1/i > 0; i++) {
    console.log("Count is: " + i);
} */
/* ==== output ====
Count is: 304700
Count is: 304701
Count is: 304702
Count is: 304703
Count is: 304704
Count is: 304705
Count is: 304706
Count is: 304707
Count is: 304708
Count is: 304709
Count is: 304710
Count is: 304711
...keeps going  
*/

/* let sum = 0.1 + 0.2
console.log(sum);
// 0.30000000000000004
//which means that 0.1+0.2 is not equal to 0.3

// FUNCTION TO SEE HOW NUMBERS ARE STORED 
function to64bitFloat(number) {
    var i, result = "";
    var dv = new DataView(new ArrayBuffer(8));
console.log(dv);
    dv.setFloat64(0, number, false);

    for (i = 0; i < 8; i++) {
        var bits = dv.getUint8(i).toString(2);
        if (bits.length < 8) {
            bits = new Array(8 - bits.length).fill('0').join("") + bits;
        }
        result += bits;
    }
    return result;
}

console.log(to64bitFloat(1)); */

// ----- ArrayBuffer() -----


// The ArrayBuffer() constructor creates a new ArrayBuffer of the given length in bytes. You can also get an array buffer from existing data, for example, from a Base64 string or from a local file.

// EXAMPLE 1:

// create an ArrayBuffer with a size in bytes

/* const buffer = new DataView(new ArrayBuffer(8));
console.log(buffer); 
// expected output: 8
*/

/* var buffer2 = new ArrayBuffer(8);
console.log(buffer2); */
/* === output:
ArrayBuffer {
    [Uint8Contents]: <00 00 00 00 00 00 00 00>,
    byteLength: 8
  } 
  */

/* var view = new Int32Array(buffer2);
console.log(view); */
//output: Int32Array(2) [0, 0]

// =======  ENCONDING: STRING IN ARRAYBUFFER  =======

/* const encoder = new TextEncoder();
const stringsArr = ["xpto", "mock", "10"]
const stringsEncoded = stringsArr.map(string => encoder.encode(string));
const stringsBuffers = stringsEncoded.map(uint8 => uint8.buffer);
console.log(stringsBuffers) */
/* OUTPUT:
[
  ArrayBuffer { [Uint8Contents]: <78 70 74 6f>, byteLength: 4 },
  ArrayBuffer { [Uint8Contents]: <6d 6f 63 6b>, byteLength: 4 },
  ArrayBuffer { [Uint8Contents]: <31 30>, byteLength: 2 }
]
*/

// =======  DECODING: ARRAYBUFFER IN STRING   =======
/* const decoder = new TextDecoder();
const stringsDecoded = stringsBuffers.map(buffer => decoder.decode(buffer));
console.log(stringsDecoded); */
/* OUTPUT:
[ 'xpto', 'mock', '10' ]
*/


//source for ArrayBuffer():  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#:~:text=The%20ArrayBuffer()%20constructor%20creates,ArrayBuffer%20is%20a%20transferable%20object.



// ----- DataView -----
/* 

source for DataView():   
*/


/* ============== BigInt type  ===============

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the constructor.

You can obtain the largest safe value that can be incremented with Numbers by using the constant Number.MAX_SAFE_INTEGER. With the introduction of BigInts, you can operate with numbers beyond the Number.MAX_SAFE_INTEGER.

This example demonstrates, where incrementing the Number.MAX_SAFE_INTEGER returns the expected result: */

// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);   // true because both are 9007199254740992


/* You can use the operators +, *, -, **, and % with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

A BigInt behaves like a Number in cases where it is converted to boolean: if, ||, &&, Boolean, !.

BigInts cannot be operated on interchangeably with Numbers. Instead a TypeError will be thrown. */


//  ===========  NaN   ====================

/* NaN ("Not a Number") is typically encountered when the result of an arithmetic operation cannot be expressed as a number. 
It is also the only value in JavaScript that is not equal to itself. */