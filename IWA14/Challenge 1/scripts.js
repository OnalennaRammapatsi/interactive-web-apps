//Added const keyword to firstName, age, and hobbyName variables since their values are not supposed to change.

const firstName = 'John';
const age = 35;
const hobbyName = 'Coding'; //Used hobbyName variable instead of the hobby function to avoid naming conflic.

//Added Passed parameter as a parameter to the logTwice function.
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter); //I added semi-colon to close
}
//Corrected function name from hobby to printHobby to avoid confusion with the hobby variable.
function printhobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbyName}!`)
}

printhobby(); //Called printHobby function at the end to run the program.