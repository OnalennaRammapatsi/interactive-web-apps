const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;



if (hourOfDay == 00 && minuteOfDay == 00) {
	let taxAsDecimal = parseInt(tax) /100*800
    taxAsDecimal = salary - taxAsDecimal
    const startingAfterTax =  taxAsDecimal -food - rent -transport
    console.log(startingAfterTax.toFixed(2))
}
	
