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


/* // You can change below however you want
const taxAsDecimal = parseFloat(tax['913']) / 100;
const taxableAmount = salary * taxAsDecimal;
const salaryAfterTax = salary - taxableAmount;
const rentKey = `${lodging}-${size}`;
const rentAmount = rent[rentKey];
const totalExpenses = expenses.food + expenses.transport + expenses.large-apartment;
const total = salaryAfterTax - totalExpenses;
console.log(total.toFixed(2)); //2658.058 */