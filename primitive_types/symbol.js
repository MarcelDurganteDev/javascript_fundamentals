let id = Symbol("id");
let id2 = Symbol("id");

const NAME = Symbol();
const SURNAME = Symbol();
const GREET = Symbol();

const person = {
  [NAME]: "Marcel1",
  [SURNAME]: "Durgante1",
  NAME: "Marcel2",
  // age: 35,
};

/* console.log(person);
 */
person.SURNAME = "Durgante2";

/* console.log(person);
console.log(person.NAME);
console.log(person[NAME]); */

person[GREET] = function () {
  console.log(`Hello`);
};
/* console.log('after greet', person);
 */
// person[GREET]();

for (let property in person) {
  // console.log(property);
  //console.log(person[property]);
}

// console.log(person);

console.log(Object.getOwnPropertySymbols(person));

// good resource:  https://www.youtube.com/watch?v=XVBkTsj99so&t=1284s
