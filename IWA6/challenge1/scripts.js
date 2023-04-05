const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

/* const primaryvalid = !isNaN(primaryPhone)
const secondaryvalid = !isNaN(secondaryPhone) */

const primaryValid = typeof number ==(primaryPhone)
const secondaryValid = typeof number !==(secondaryPhone) 
/* const primaryValid = !isNaN(primaryPhone) && typeof primaryPhone == 'string' */
/* const secondaryValid = !isNaN(secondaryPhone) && typeof secondaryPhone == 'string' */

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)