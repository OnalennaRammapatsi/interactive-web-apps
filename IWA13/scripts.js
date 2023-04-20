let state = 'idle'
let user = null
let calculated = '1'
// Only allowed to change below

/*The logCalc function converts calculated to a number using parseInt 
if it is a string, increments it by 1, and then sets the new value of calculated.*/
const logCalc = () => {
    const isString = typeof calculated === 'string'; 
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated; 
    calculated = calculatedAsNumber + 1;
}

/*The calcUser function calls logCalc and then sets user to 'John' and state to 'requesting' if calculated is greater than 2.
 If calculated is greater than 3, it sets state back to 'idle'.*/
const calcUser = () => {
  logCalc ();
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
}
const checkUser  = () => {
  if (user && state === 'requesting') { //check if user is equal to requesting it must print the message and if not it musnt print the message.
    console.log(`User: ${user} (${calculated})`) ;
  }
}
// Only allowed to change code above
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()









