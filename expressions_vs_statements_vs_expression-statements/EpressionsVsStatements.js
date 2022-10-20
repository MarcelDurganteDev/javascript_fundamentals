// ==========  EXPRESSIONS  ==============

/* 
1. Expressions result in single value.
2. Expressions can be as long as you want them to be, always resulting in a single value. 

Expressions can contain expressions. For example, how many expressions do you count in this chunk of JS code? 

(5+1)*2

Expression #1: The entire expression
This chunk of code is itself an expression, producing the number “12”.

Expression #2: The addition in the parentheses
This sub-expression evaluates first, because of the parens, and resolves to “6”.

Expression #3: The first number being added
Individual numbers are themselves expressions, since they produce a value. This expression resolves to “5”.

Expression #4: The second number being added
By the same logic, this number is also an expression, producing the number “1”.

Expression #5: The multiplier
This number forms the final expression, which resolves to “2”.
*/

// OTHER EXAMPLES:
/* 

true && 2 * 9 // 18

1 → produces 1

"hello" → produces "hello"

5 * 10 → produces 50

num > 100 → produces either true or false

isHappy ? "🙂" : "🙁" → produces an emoji

[1, 2, 3].pop() → produces the number 3

2 + 2 * 3 / 2

(Math.random() * (100 - 20)) + 20

functionCall()

window.history ? useHistory() : noHistoryFallback()

1+1, 2+2, 3+3

declaredVariable

true && functionCall()

true && declaredVariable

*/


//  Expressions don’t necessarily change a state

/* 
const assignedVariable = 2; //this is a statement, assignedVariable is state

assignedVariable + 4 // expression

assignedVariable * 10 // expression

assignedVariable - 10 // expression

console.log(assignedVariable) // 2 


Despite all the expressions in the snippet above, assignedVariable’s value is still 2. 

Function calls are expressions but can contain statements that change state. 

foo() in itself is an expression, that either returns undefined or some other value, but if foo was written as */

 const foo = function doFoo() {
   assignedVariable = 14
}

/* then, even though its call is an expression, its call has also resulted in a state change. 

So a better way to rewrite the foo function and statement would be: */

const foo2 = function doFoo2 () {
  return 14 //explicit return for readability
}

const assignedVariable2 = foo2()

//  or even better

const foo3 = function doFoo3 (n) {
  return n//explicit return for readability
}

const assignedVariable3 = foo3(14)

console.log(assignedVariable3); //  14


//  ==================  STATEMENTS  ==================

/* 

Statements
A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

1. Statements perform actions, they do things.
2. Never to be used where a value is expected. So they cannot be used as function arguments, right-hand side of assignments, operators operand, return values… 

Here are some examples of statements in JavaScript:
*/


let hi = 5;

if (hi > 10) {
  // More statements here
}

throw new Error('Something exploded!');

foo(if () {return 2}) // error

/* These are all javascript statements:

if
if-else
while
do-while
for
switch
for-in
debugger
variable declaration 

all of the following lines are valid statements:*/

// Statement 1:
let hi = /* expression slot */;

// Statement 2:
return /* expression slot */;

// Statement 3:
if (/* expression slot */) { }

// Statement 4:
/* expression slot */

// source: https://www.youtube.com/watch?v=B8g1Wc5M8BY

