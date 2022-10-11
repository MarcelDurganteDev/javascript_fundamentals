/* ===================  null   =========================
Description 

The value null represents the intentional absence of any object value. 
It is one of JavaScript's primitive values and is treated as falsy for boolean operations. 

The value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.
*/

//  JavaScript Demo: Standard built-in objects - Null

/* ----  OBS: str.match(/[aeiou]/gi)

It's regular expression. "[aeiou]" tells the replace function to look for any of these characters and "gi" are flags that 
tells the function to look for match over the entire string (will otherwise break at the first match), this is the "g" flag. 
And the "i" flag tells it to match case insensitively. So, it would also match, A , E and so on. */


function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    console.log(m); // [ 'a', 'e' ]
    return m.length;
  }
  
  console.log(getVowels('sky'));
  // expected output: 0

  console.log(getVowels('marcel'));
  // expected output: 2


  /* ============== OBS:  Difference between null and undefined   ===================
  
When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former performs type-conversion. */

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
