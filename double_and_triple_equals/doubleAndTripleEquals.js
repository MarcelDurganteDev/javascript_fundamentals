/* THE KEY THING ABOUT DOUBLE AND TRIPLE EQUALS


!!!!!!!!!!!!!!!!!         Avoid using Double and manly use Triple Equals (===), unless you need type coercion for something         !!!!!!!!!!!!!!!!

And before we understand each ones difference, let's see the steps javaScript does in comparison operations

STEPS OF COMPARISON IN JAVASCRIPT
Assume that we are comparing x and y, where x and y could be of any type:

Check if the types are the same. If the types are the same, JavaScript will call triple equals and you are done.

But if the types are not the same, JavaScript will follow another path. In this path, JavaScript will try to figure out what to coerce. These are the steps it will execute:

a. First check if we are comparing `null` and `undefined`. If we are, return true. If not:

b. Check if we are comparing a `string` with a `number`. If we are, coerce the `string` value to number and call the double equals and go back to the very first step. Eg:


2 == "3"
      ↓   coerce "3" to number 3.
2 ==  3   calling double equals again, and start over

If not:

c. Check if we are comparing a `boolean` with something else. If we are, coerce the `boolean` to a number and call double equals and start over. Eg:

true == "3"
↓             coerce true to number 1.
1    == "3"   start over again.

If not:

d. Check if we are comparing an `object` with a `number`, `string`, or a `symbol`. If we are, coerce the `object` to a primitive, call double equals on the result and start over again. Eg:

{ a: 'hello'}      ==     "5"
     ↓                          coerce the object to a primitive
"[object Object]"  ==     "5"   and start over again

Another example:

[1,2,3]     ==     "5"
  ↓                       coerce object to a primitive
"1,2,3"     ==     "5"    and start over again

(I’ll explain how the objects get coerced to primitives in a second, but for now bare with me.)

If not, we don’t have anything else to check. If none of the steps above matches, return false at the end.
*/


// ================  Triple Equals ( === )

//    Triple (strict) equality is that both the **type** and the **value** we are comparing have to be the same.

Examples: 

"hello world" === "hello world";
// true (BothStrings, equalvalues)true === true
// true (BothBooleans, equalvalues)

77 === "77";
// false (Number v. String)

"cat" === "dog";
// false (Both are Strings, but have different values)
false === 0;
// false (Different type and different value)

/*  -------------  Double Equals ( == )

When using double equals in JavaScript we are testing for loose equality.Double equals also performs type coercion.

Type coercion means that two values are compared only after attempting to convert them into a common type. */

77 === "77";
// false (Number v. String)

// 77 does not strictly equal '77' because they have different types. However, if we were to test these values with loose equality…

77 == "77";
// true

// when comparing the string "0" and the number 0, the first argument is first converted to a number.

"0" == 0;
// becomes ↓
ToNumber("0") === 0;

true == "3";
// ↓           //  coerce true to number 1.
1 == "3"; //  start over again.
// output: false

false === 0;
// false (Different type and different value)

false == 0;
// true

2 == "3";
// ↓    coerce "3" to number 3.
2 == 3; // calling double equals again, and start over

/* -------------  Falsy Values

Okay, so why does `false == 0` in JavaScript? It’s complex, but it’s because in JavaScript `0` is a **falsy** value.

Type coercion will actually convert our zero into a false boolean, then `false` is equal to `false`.

# ====== RECORD THIS ======

There are only 6 falsy values in JavaScript you should be aware of:

- false — boolean false
- 0 — number zero
- `“”` — empty string
- null
- undefined
- NaN — Not A Number 

null == null
// true
undefined == undefined
// true
null == undefined
// true

BUT...... the complex rules for other types lead to illogical results

false == undefined // false
false == null      // false
null == undefined  // true

*/
