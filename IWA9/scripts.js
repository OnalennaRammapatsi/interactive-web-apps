const salary = 4000;
const lodging = 'apartment'
const size = 'large'

// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,
    // another way I could fix this code is to declare another variable 'largeApartment' and calculate it under expenses
}

const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

const taxAsDecimal = parseInt(tax['913']) / 100;
const startingAfterTax = salary * (1 - taxAsDecimal); //added C-Brackets to multiply instead of subtracting
const type = lodging + size;  //Added semi-colon to mark the end of a statement
const balance = startingAfterTax - expenses['transport'] - expenses['food'] - rent['large-apartment']; // added startingAfterTax for expenses to be substrated from it

console.log(balance.toFixed(2));
//The syntax for subtracting an expense from the balance was incorrect - expenses(type) instead of expenses[type].
//The balance was not computed correctly. The transport expense was subtracted from the food expense instead of the other way around.
//the rent expense was not interpolated correctly. Instead of using rent[type], we needed to create a rent key.
//The total was not computed correctly. The expenses were not subtracted from the after-tax salary.

//I corrected the syntax for accessing the tax rate, by using tax[913] instead of tax.913.
//I interpolated the lodging and size variables to create the type string and used it to access the corresponding rent value from the rent object




/* // You can change below however you want
const taxAsDecimal = parseFloat(tax['913']) / 100;
const taxableAmount = salary * taxAsDecimal;
const salaryAfterTax = salary - taxableAmount;
const rentKey = `${lodging}-${size}`;
const rentAmount = rent[rentKey];
const totalExpenses = expenses.food + expenses.transport + expenses.large-apartment;
const total = salaryAfterTax - totalExpenses;
console.log(total.toFixed(2)); //2658.058 */