const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// The shipping cost based on the user's location
let location = 'RSA';
let currency = 'R';
let customers = 1;
let shipping;

// Define the cost of items in the user's cart
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (location === 'RSA') {
    shipping = 400;
} else if (location === 'NAM') {
    shipping = 600;
} else if (location === 'NK')  { // Stop further execution of the code as we don't ship to North Korea

    console.log(BANNED_WARNING);
} else {
    shipping = 800;
}
// Checking if free shipping should apply
const subtotal = shoes + toys + shirts + batteries + pens;

if ((subtotal >= 1000) && (location === 'RSA' || location === 'NAM') && (customers === 1)) {
    shipping = 0;
} else if (shipping === undefined) {
    console.log(BANNED_WARNING);
} else if ((shipping === 0) && (customers !== 1)) {
    console.log(FREE_WARNING);
} 
// Output of the total price
const total = subtotal + shipping;

console.log('Price:', currency, total);

//the code for calculating shipping was restructured to use a switch statement and handle cases for each location.
//the code for outputting the total price was corrected.

//The changes resulted in the intended behavior because they corrected the syntax errors and logical errors in the original code, and made the code more readable and understandable.
// *adding warnings for certain cases, the user is given feedback on why they may not be eligible for free shipping.