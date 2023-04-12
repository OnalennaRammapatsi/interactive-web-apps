const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const divider = '----------------------------------'

// Only change below this line

const owed = (parseFloat(Math.abs(leoBalance).toFixed(2)) + parseFloat(Math.abs(sarahBalance).toFixed(2)))
const leo = `${leoName}  ${leoSurname}  (Owed:R  ${Math.abs(leoBalance).toFixed(2)})`;
const sarah = `${sarahName} ${sarahSurname}  (Owed:R ${Math.abs(sarahBalance).toFixed(2)})`;
const total = `Total amount owed: R ${owed}`;
const result = `\n${leo}\n${sarah}\n\n\n${divider}\n${total}\n${divider}`
console.log((result.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')));


//'Maths.abs' to make that the value is always positive.
//I used owed calculation to use parseFloat instead of parseInt and to perform a mathematical addition of leoBalance and sarahBalance.
//the owed calculation attempted to concatenate strings, which resulted in a string with the values -9394-4582.21000111 instead of performing a mathematical calculation.
//the leo and sarah variables were not properly formatted to include the values of leoName, leoSurname, surname, and sarahBalance.
//the owed calculation resulted in NaN because the input values were not parsed correctly as numbers.



/* const leo = `${leoName} ${leoSurname} (Owed: R ${(-1* parseFloat(leoBalance)).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${ (-1 * parseFloat(sarahBalance)).toFixed(2)})\n`;
const total = `  Total amount owed: R  $((-1 *parseFloat(leoBalance)) + (-1 *parseFloat(sarahBalance)).toFixed(2)\n`

const result = `${leo}${sarah}${divider}\n${total}${owed}\n${divider}`;

console.log(result);  */

/* 
const leo = `${leoName} ${leoSurname} (Owed: R ${parseFloat(leoBalance).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahsurname} (Owed: R ${parseFloat(sarahBalance).toFixed(2)})\n;
const total = `Total amount owed: R ${(parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2)}\n`;

const result = `\n${leo}$ {sarah}${divider}\n${total}${divider}`;

console.log(result); */ 
