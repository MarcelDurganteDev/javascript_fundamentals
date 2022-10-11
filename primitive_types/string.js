// Making Strings
let color = "purple";

// Single quotes work too:
let city = 'Tokyo';

//Strings have a length:
city.length; //5

//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'

// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"

// String methods with arguments:
// ==============================

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string
"pancake".slice(3); //"cake" - slice from index 3 onwards
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"

// combine methods to delete extra spaces before and after the initial word, capitalize the letter 'r', change letter 'u' per letter 'l', 
let initialWord = "   marceu       ";
let trimmedWord = initialWord.trim();
let capitalLetter = trimmedWord.charAt(2).toUpperCase()
let newWord = trimmedWord.slice(0,2) + capitalLetter + trimmedWord.slice(3)
let finalWord = newWord.replace('u', 'l')

console.log('finalWord: ', finalWord); // finalWord: maRcel

// str.repeat()
let str2 = 'lol,';

console.log(str2.repeat(3));  // lol,lol,lol

// Provided a word variable, set to "skateboard" use string methods on word, so that you end up with the string "beard". Save the result in a variable called facialHair
const word = "skateboard"; 
const facialHair = word.slice(-5).replace('o', 'e') 
console.log(facialHair); // beard

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// ========================
const colors = "olive green and blue";
const msg = `My favorite colors are: ${colors}` //"My favorite colors are: olive green an blue"
const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"

/* 
String Template Literal Exercise ( also repeatead in objects/math/math.js)
I've provided you with two variables, die1 and die2 which represent six-sided dice.  Each variable holds a randomly generated integer from 1 to 6.  Please create a new variable called roll, which will be a string that displays each die as well as their sum.  Follow this pattern:
die1: 3
die2: 5
roll: "You rolled a 3 and a 5. They sum to 8"
Here is another example with different numbers:
die1: 6
die2: 4,
roll: You rolled a 6 and a 4. They sum to 10"
*/

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`