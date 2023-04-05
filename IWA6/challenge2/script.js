const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;



if (hourOfDay !== undefined && minuteOfDay !== undefined  && hourOfDay === 0 && minuteOfDay === 0)
{
    let taxAsDecimal = parseFloat(tax) / 100;
    const startingAfterTax = salary * (1 - taxAsDecimal);
    const balance = startingAfterTax - transport - food - rent;
    console.log("R"+balance.toFixed(2));
}
