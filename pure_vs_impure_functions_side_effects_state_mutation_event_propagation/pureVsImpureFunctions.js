// ===========  PURE VS. IMPURE FUNCTIONS  ===========

/* What is a pure function?

* Given the same input, will always return the same output.
* Produces no side effects.
* Relies on no external state.

Pure functions map between arguments and return values. */

// --------- IMPURE addToCart mutates existing cart
// !!! PS.: find down bellow a more actual version of this example
/* const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity,
  });
  return cart;
}; */
/* 
test("addToCart()", (assert) => {
  const msg = "addToCart() should add a new item to the cart.";
  const originalCart = {
    items: [],
  };
  const cart = addToCart(
    originalCart,
    {
      name: "Digital SLR Camera",
      price: "1495",
    },
    1
  );

  const expected = 1; // num items in cart
  const actual = cart.items.length;

  assert.equal(actual, expected, msg);

  assert.deepEqual(originalCart, cart, "mutates original cart.");
  assert.end();
}); */

// ============== PURE addToCart() returns a new cart
// ---------- It does not mutate the original.
// !!! PS.: find down bellow a more actual version of this example
/* const addToCart2 = (cart, item, quantity) => {
  const newCart = lodash.cloneDeep(cart);

  newCart.items.push({
    item,
    quantity,
  });
  return newCart;
}; */

/* test("addToCart()", (assert) => {
  const msg = "addToCart() should add a new item to the cart.";
  const originalCart = {
    items: [],
  };

  // deep-freeze on npm
  // throws an error if original is mutated
  deepFreeze(originalCart);

  const cart = addToCart(
    originalCart,
    {
      name: "Digital SLR Camera",
      price: "1495",
    },
    1
  );

  const expected = 1; // num items in cart
  const actual = cart.items.length;

  assert.equal(actual, expected, msg);

  assert.notDeepEqual(originalCart, cart, "should not mutate original cart.");
  assert.end();
});
 */

// ---------- Pure func that calculates price with tax (UK tax is 20%)
// It doesn’t depend on any external input, it doesn’t mutate any data and it doesn’t have any side effects.
// If you run this function with the same input 100,000,000 times it will always produce the same result.
function priceAfterTax(productPrice) {
  return productPrice * 0.2 + productPrice;
}
// ----- or
function priceWithTax(prodPrice, tax) {
  return (prodPrice * tax) / 100 + prodPrice;
}
//  ----- or
const calculatePriceWithTax = (price, tax) => {
  return (price * tax) / 100 + price;
};

calculatePriceWithTax(100, 20); // 120

// ---- Impure version of the above
// the function depends on an external tax variable
var tax = 20;
function calculateTax(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
console.log(calculateTax(100)); // 120

// ============== PURE AND IMPURE addToCart examples

// IMPURE

const addToCartES6 = (cart, item, quantity) => {
  // mutates cart's items property pushing a new item obj and its quantity into cart object
  cart.items.push({
    item, 
    quantity
  });
  // return mutated cart
  return cart;
}

// PURE
// create a new object {}, generate a new array with all the cart items and then we push our new item with its quantity

const addToCartPure = (cart, item, quantity) => {
  return {
    // take all properties of cart e put it with spread inside this object
    ...cart,
    // put new item inside items array, overwrite items in this object completely ' items: [] ', merge all items with the spread of ' ...cart.items ', so it just flattens the array to this new array and fill it with new the new object which is the new item and quantity
    items: [...cart.items, {item, quantity}]
  }
}

// -------------------------------------------------------------------------------------

const fs = require("fs");

// pure
function isPetNameLong(petName) {
  return petName.length >= 4;
}
// pure
function getLongPetNames(file) {
  const petNames = file.toString().split("\n").slice(0, file.legnth);
  return petNames.filter(isPetNameLong);
}
// impure
function main() {
  const file = fs.readFileSync("petNames.txt");
  const longPetNames = getLongPetNames(file);
  console.log(longPetNames);
}

main(); //  [ 'Loladurgante', 'Bobby', 'Stacy', 'Pobby' ]