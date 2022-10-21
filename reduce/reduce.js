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

// ===========  Sum of values in an object array  =======================

// To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.
// NOTE THE 'currentValue.x' GETTING THE VALUE OF PROPERTY X

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  0
);

console.log(sum); // logs 6

console.log(objects[0].x); // logs 1
console.log(objects[1].x); // logs 2
console.log(objects[2].x); // logs 3

// Example 2

// Create array of numbers:
const numbers2 = [1, 3, 5, 7, 9, 11];

// Sum the numbers array:
const sum2 = numbers2.reduce((accumulator, currentValue, index) => accumulator + currentValue, 0)
// For each iteration, add the "currentValue"
// to the value of the "accumulator".

// Log the result:
console.log(sum2)
// 36


//  ==============  Flatten an array of arrays  =================

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);
// flattened is [0, 1, 2, 3, 4, 5]

//  Example 2

// Create array of numbers:
const numbers5 = [1, [3, 5], [7, 9, 11], [13, 15, 17]];

// Flatten an array:
const numbersFlattened = numbers5.reduce((accumulator, currentValue) => {
  // Concatenate the accumulator with the currentValue:
  return accumulator.concat(currentValue);
}, [])

// Log the result:
console.log(numbersFlattened)
// [1,  3,  5,  7, 9, 11, 13, 15, 17]

// =============== Counting instances of values ( counting number of occurences ) in an object  ======================

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});

console.log( countedNames);

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Example 2:

// Create array of numbers:
const fruit = ['apple', 'pear', 'lemon', 'avocado', 'apple', 'banana', 'pear', 'apple', 'pineapple'];

// Count the number of occurrences:
const occurrences = fruit.reduce((accumulator, currentItem) => {
  // Check if item exists in accumulator object:
  if (currentItem in accumulator) {
    // If so, increase the number of occurrences by 1:
    accumulator[currentItem] = accumulator[currentItem] + 1
  } else {
    // Else register new occurrence:
    accumulator[currentItem] = 1
  }

  // Return the accumulator object:
  return accumulator
}, {})

// Log the result:
console.log(occurrences)
// {
//   apple: 3,
//   pear: 2,
//   lemon: 1,
//   avocado: 1,
//   banana: 1,
//   pineapple: 1
// }

//  =============  Grouping objects by a property ( Changing shape of objects inside arrays ) ========================

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

// Example 2:

// Create array of numbers:
const records = [
  { name: 'Joe', grade: 'A' },
  { name: 'Tom', grade: 'B' },
  { name: 'Sandra', grade: 'B' },
  { name: 'Joel', grade: 'C' },
  { name: 'Victoria', grade: 'A' }
]

// Change the structure of objects in "records" array:
const updatedRecords = records.reduce((accumulator, currentItem) => {
  // During each iteration, transform currently processed object
  // into this shape:
  accumulator[currentItem.name] = {
    grade: currentItem.grade,
    passed: ['A', 'B'].includes(currentItem.grade)
  }

  // Return the modified object:
  return accumulator
}, {})

// Log the result:
console.log(updatedRecords)
// {
//   Joe: { grade: 'A', passed: true },
//   Tom: { grade: 'B', passed: true },
//   Sandra: { grade: 'B', passed: true },
//   Joel: { grade: 'C', passed: false },
//   Victoria: { grade: 'A', passed: true }
// }

// =================  Concatenating arrays contained in an array of objects using the spread syntax and initialValue  ===============

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

// ============  Replace .filter().map() with .reduce()  ======================

// Using filter() then map() traverses the array twice, but you can achieve the same effect while traversing only once with reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with forEach().)

/* const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...previousValue, doubled];
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4] */

// ========= Running Promises in Sequence  =======================   ?????????????????????????

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

// ================= Function composition enabling piping  ==================

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

// ====================  Finding averages  =============================

// Create array of numbers:
const numbers = [1, 3, 5, 7, 9, 11];

// Find the average:
const average = array.reduce((accumulator, currentValue, index, array) => {
  // For each iteration, add the "currentValue"
  // to the value of the "accumulator".
  accumulator += currentValue

  // Check if currentItem is the last item in the array:
  if (index === array.length - 1) {
    // If it is, divide the accumulated value
    // by the length of the array and return the result:
    return accumulator / array.length
  } else {
    // Otherwise, return the accumulated value:
    return accumulator
  }
})

// Log the result:
console.log(average)
// 6

// ================  Finding minimum and maximum values  ==========================

// Create array of numbers:
const numbers3 = [1, 3, 5, 7, 9, 11];

// Find minimum value:
const min = numbers3.reduce((accumulator, currentValue) => {
  // If the value of "accumulator" is less than "currentValue"
  // return the "accumulator", else return the "currentValue":
  return accumulator < currentValue ? accumulator : currentValue;
})

// Log the result:
console.log(min)
// 6

//  We can easily find the maximum value by switching the condition inside the callback function.

// Create array of numbers:
const numbers4 = [1, 3, 5, 7, 9, 11];

// Find maximum value:
const max = numbers4.reduce((accumulator, currentValue) => {
  // If the value of "accumulator" is greater than "currentValue"
  // return the "accumulator", else return the "currentValue":
  return accumulator > currentValue ? accumulator : currentValue;
})

// Log the result:
console.log(max)
// 11

// source:  https://blog.alexdevero.com/javascript-reduce-method/

// Interesting usage of reduce()

/* let itemIDs = [1, 2, 3, 4, 5]; 
itemIDs.reduce((promise, itemID) => {
  return promise.then(_ => api.deleteItem(itemID));
}, Promise.resolve()); */

// output:
// Promise.resolve()
// .then(_ => api.deleteItem(1))
// .then(_ => api.deleteItem(2))
// .then(_ => api.deleteItem(3))
// .then(_ => api.deleteItem(4))
// .then(_ => api.deleteItem(5));