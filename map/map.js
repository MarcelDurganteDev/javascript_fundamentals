const numbers = [2, 4, 8, 10];
const halves = numbers.map((x) => x / 2); // halves is [1, 2, 4, 5]

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// Mapping an array of numbers to an array of square roots

const numbers2 = [1, 4, 9];
const roots = numbers2.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers2 is still [1, 4, 9]

// Using map to reformat objects in an array

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

// Mapping an array of numbers using a function containing an argument

const numbers3 = [1, 4, 9];
const doubles = numbers3.map((num) => num * 2);

// doubles is now   [2, 8, 18]
// numbers3 is still [1, 4, 9]

// Calling map() on non-array objects

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2)); // [ 4, 9, 16 ]

// Using map() generically on a NodeList

/* const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value); */

// Using map() on sparse arrays

console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  })
);
// Visit 0
// Visit 2
// [2, empty, 6]

// Using parseInt() with map()

["1", "2", "3"].map(parseInt);

// While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].

// parseInt(string, radix) -> map(parseInt(value, index))
/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN

// Then let's talk about solutions.

const returnInt = (element) => parseInt(element, 10);

["1", "2", "3"].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

["1", "2", "3"].map((str) => parseInt(str)); // [1, 2, 3]
// Same as above, but using the concise arrow function syntax

["1", "2", "3"].map(Number); // [1, 2, 3]
// A simpler way to achieve the above, while avoiding the "gotcha"

["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation

["1.1", "2.2e2", "3e300"].map((str) => parseInt(str)); // [1, 2, 3]
// For comparison, if we use parseInt() on the array above

// One alternative output of the map method being called with parseInt as a parameter runs as follows:

const strings = ['10', '10', '10'];
const numbers4 = strings.map(parseInt);

console.log(numbers4);
// Actual result of [10, NaN, 2] may be unexpected based on the above description.

// Mapped array contains undefined

const numbers5 = [1, 2, 3, 4];
const filteredNumbers = numbers5.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers5 is still [1, 2, 3, 4]

// =========== Transforming Array of Objects into Array of Strings  ===============

const songs = [
  {id: 1 , name: 'Oblivion', artist: 'Marcel'},
  {id: 2 , name: 'Temptation', artist: 'Marilene'},
  {id: 3 , name: 'Ilusion', artist: 'Mikaela'},
  {id: 4 , name: 'Happy', artist: 'Lola'}
]

// ES6
const mySongFunc = song => song.name.toLowerCase();

// const lowerCaseSongs = songs.map(mySongFunc);
// or 
const lowerCaseSongs = songs.map(song => song.name.toLowerCase())

console.log(lowerCaseSongs); // [ 'oblivion', 'temptation', 'ilusion', 'happy' ]
console.log(songs);
