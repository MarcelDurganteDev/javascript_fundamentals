// ============== Filtering out all small values

function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // filtered is [12, 130, 44]

// ==============  Find all prime numbers in an array

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// ==============  Filtering invalid entries from JSON

//The following example uses filter() to create a filtered JSON of all elements with non-zero, numeric id.

const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' },
  ];
  
  let invalidEntries = 0;
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  
  const arrByID = arr.filter(filterByID);
  
  console.log('Filtered Array\n', arrByID);
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries);
  // Number of Invalid Entries = 5


// ============ Searching in array

// Following example uses filter() to filter array content based on search criteria.

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']


// ============= Using filter() on sparse arrays

// filter() will skip empty slots.

console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]

// ============= Calling filter() on non-array objects

// The filter() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(
  Array.prototype.filter.call(arrayLike, (x) => x <= "b"),
); // [ 'a', 'b' ]

// ==============  Affecting Initial Array (modifying, appending and deleting)

// The following example tests the behavior of the??`filter`??method when the array is modified.

// Modifying each word
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += ' extra';
  return word.length < 6;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words.filter((word, index, arr) => {
  arr.push('new');
  return word.length < 6;
})

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
})

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]



