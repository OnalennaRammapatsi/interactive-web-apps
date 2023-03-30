const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';

const NONE_SELECTED = 0;

//Define the shipping cost based on the user's location
let shipping;
if (location === 'RSA') {
    shipping = 400;
} else if (location === 'NAM'){
    shipping = 600;
} else if (location === 'NK'){
    console.log(BANNED_WARNING);

//stop further excution of the code as we don't ship to North Korea
    return;
} else {
    shipping = 800;
}

//Define the cost of item in the user's cart
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens =  NONE_SELECTED;
const subtotal = shoes + toys +shirts + batteries + pens;

//check if free shipping should apply
if (subtotal >= 1000 && customer === 1 && (location === 'RSA' || location === 'NAM')){
    shipping = 0;

}else if (customer !==1 && shipping === 0){
    console.log(FREE_WARNING);
}
//Output the total price 
const total = subtotal + shipping;
console.log('Price:', currency, total);
