const MONTHS = [ //a calendar that displays the current month's dates and weeks.
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below 

const createArray = (length) => { //"createArray" function called createArray that takes a parameter length and returns an array of numbers from 0 to length - 1
    const result = []; //anitially it is an empty array called `result`

    for (let i = 0; i < length; i++) { //it loops `length` times using `for` loop, pushing `i` into the `result` array.
        result.push(i);
    }
    return result; //after the loop is complete, it returns the array which contains `length` elements. 
};

const createData = function(){ //"createData()" creates a two-dimensional array of weeks and days that represent the current month.
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay(); //I used the getDay() function to get the first day of the current month and then calculates the number of days in the current month using getDaysInMonth(). 
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(6); //used loop to creatan object for each week and day.
    const days = createArray(7);
     let result = [] //value = null

    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) { // the "index()" method returns the first index(position) of a specified value.
        let value = {
            week: weekIndex + 1,
            days: []
        };

        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex - startDay + 1;
            const isValid = day > 0 && day <= daysInMonth;
// "isValid" is for error correcting 
            let classString = 'table__cell';

            if (dayIndex === 0 || dayIndex === 6) {
                classString += 'table__cell_weekend';
            }
             value.days.push({ //used the "push()" method to add new item to the end of an array.
                dayOfWeek: dayIndex + 1, 
                value: isValid ? day : '', //used "?" ternary operator to check if the condition is truthy/ falsey
                class: classString,
             });
            }
            weeks[weekIndex] = value;
        }
        return weeks;
};

const addCell = function(existing, classString, value) { //defines a function `addCell` that has 3 parameters (strings)
  return `${existing}<td class="${classString}">${value}</td>`; 
  /* `existing` from the existing HTML content that the `addCell` will append to. 
  `classString`: from the CSS class name(s) to be applied to the new HTML element. 
  `value` a string that represents the text content of the new HTML element.*/
};
const createHtml = function(data) {             
  let result = '';
  for (let i = 0; i < data.length; i++) {      
    const week = data[i];
    let inner = '';
    inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);  
    
    for (let j = 0; j < week.days.length; j++) {                  
      const day = week.days[j]; // used the loop to check the length of the arrays on days
      let classString = 'table__cell';
      //added constant to declare 'isToday, isWeekend, and isAlternate' variables.
      const currentDate = new Date();
      const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
      const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7; //the loop counts until 7(days), after that it stops
      const isAlternate = week.week % 2 === 0;
      if (isToday) {
        classString = `${classString} table__cell_today`;      
      }
      if (isWeekend) {
        classString = `${classString} table__cell_weekend`;    
      }
      if (isAlternate) {
        classString = `${classString} table__cell_alternate`;  
      }
      inner = addCell(inner, classString, day.value || '');
    }
    result += `<tr>${inner}</tr>`;            
  }
  return result;
};


// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)