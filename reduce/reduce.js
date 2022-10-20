// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

// ===========  Syntax

// Arrow function

/* reduce((previousValue, currentValue) => { ...
});

reduce((previousValue, currentValue, currentIndex) => {
  ...
});

reduce((previousValue, currentValue, currentIndex, array) => {
  ...
});

reduce((previousValue, currentValue) => {
  ...
}, initialValue);

reduce((previousValue, currentValue, currentIndex) => {
  ...
}, initialValue);

reduce((previousValue, currentValue, currentIndex, array) => {
  ...
}, initialValue);

// Callback function
reduce(callbackFn);
reduce(callbackFn, initialValue);

// Inline callback function
reduce(function (previousValue, currentValue) {
  ...
});

reduce(function (previousValue, currentValue, currentIndex) {
  ...
});

reduce(function (previousValue, currentValue, currentIndex, array) {
  ...
});

reduce(function (previousValue, currentValue) {
  ...
}, initialValue);

reduce(function (previousValue, currentValue, currentIndex) {
  ...
}, initialValue);

reduce(function (previousValue, currentValue, currentIndex, array) {
  ...
}, initialValue); */

// Examples

// ============== How reduce() works without an initial value

// The code below shows what happens if we call reduce() with an array and no initial value.
// The callback would be invoked four times, with the arguments and return values in each call being as follows:

const array = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
  const returns = previousValue + currentValue;
  console.log(
    `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

// output

// previousValue: 15, currentValue: 16, index: 1, returns: 31
// previousValue: 31, currentValue: 17, index: 2, returns: 48
// previousValue: 48, currentValue: 18, index: 3, returns: 66
// previousValue: 66, currentValue: 19, index: 4, returns: 85

// =============== How reduce() works with an initial value  -> THE INITIAL VALUE IS ADDED TO THE FINAL RESULT (see above final is 85 but bellow as it starts with 10 final is 95)

// Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed the second argument to reduce()
// The callback would be invoked five times, with the arguments and return values in each call being as follows:

[15, 16, 17, 18, 19].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  10
);

/*
              previousValue 	currentValue	  index	  Return value
First call	      10	             15	          0	         25
Second call	      25	             16	          1	         41
Third call	      41         	     17	          2          58
Fourth call	      58	             18           3	         76
Fifth call	      76	             19	          4	         95 
*/

// The value returned by reduce() in this case would be 95.

// ===========  Sum of values in an object array

// To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  0
);

console.log(sum); // logs 6

//  ==============  Flatten an array of arrays

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);
// flattened is [0, 1, 2, 3, 4, 5]

// =============== Counting instances of values in an object

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//  =============  Grouping objects by a property

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedPeople = groupBy(people, "age");

// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

// =================  Concatenating arrays contained in an array of objects using the spread syntax and initialValue

// friends - an array of objects
// where object field "books" is a list of favorite books

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue

const allbooks = friends.reduce(
  (previousValue, currentValue) => [...previousValue, ...currentValue.books],
  ["Alphabet"]
);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

// Remove duplicate items in an array
// Note: The same effect can be achieved with Set and Array.from() as const arrayWithNoDuplicates = Array.from(new Set(myArray)) with better performance.

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce(
  (previousValue, currentValue) => {
    if (!previousValue.includes(currentValue)) {
      return [...previousValue, currentValue];
    }
    return previousValue;
  },
  []
);

console.log(myArrayWithNoDuplicates);

// ============  Replace .filter().map() with .reduce()

// Using filter() then map() traverses the array twice, but you can achieve the same effect while traversing only once with reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with forEach().)

const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...previousValue, doubled];
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

// ========= Running Promises in Sequence

/**
 * Chain a series of promise handlers.
 *
 * @param {array} arr - A list of promise handlers, each one receiving the
 * resolved result of the previous handler and returning another promise.
 * @param {*} input The initial value to start the promise chain
 * @return {Object} Final promise with a chain of handlers attached
 */

function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3 - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200

// ================= Function composition enabling piping

// Building-blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Function composition enabling pipe functionality
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

// ========== Using reduce() with sparse arrays

// reduce() skips missing elements in sparse arrays, but it does not skip undefined values.

console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

// ============ Calling reduce() on non-array objects
// The reduce() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y)); // 9
