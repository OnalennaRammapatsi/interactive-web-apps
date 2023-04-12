const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 00:00`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: { 
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
if (holidays[9]) {
    console.log(holidays[9].name)
} else{
    console.log('ID 9 not created yet')
}
const christmas = 6
const futureId = 9

let copied = {...holiday[christmas]}
copied.name = 'X-mas Day'
let correctDate = new Date(copied.date)
correctDate.setHours(0, 0, 0, 0)
let isEarlier = correctDate < holidays[6].Date
console.log('New date is earlier:', isEarlier)
if (isEarlier) {
    copied.date = correctDate
}

console.log('ID change:', copied.id === holidays[christmas].id ? false : copied.id)
console.log('Name change:', copied.name === holidays[christmas].name ? false : copied.name)
console.log('Date change:', copied.date === holidays[christmas].date ? false : copied.date.toLocaleDateString('en-ZA', {day:'2-digit', month:'2-digit', year:'numeric'}))

// Find the first holiday in the year
let firstHoliday = Object.values(holidays).reduce((earliest, holiday) => {
    const holidayDate = new Date(holiday.date)
    if (holidayDate.getMonth() < earliest.date.getMonth()) {
        return {date: holidayDate, name: holiday.name}
    } else if (holidayDate.getMonth() === earliest.date.getMonth()) {
        return holidayDate.getDate() < earliest.date.getDate() ? {date: holidayDate, name: holiday.name} : earliest
    } else {
        return earliest
    }
}, {date: new Date(`31 December ${currentYear}`), name: ''})

console.log(`First holiday of the year: ${firstHoliday.date.toLocaleDateString('en-ZA', {day:'2-digit', month:'2-digit', year:'numeric'})} (${firstHoliday.name})`)

// Find the last holiday in the year
let lastHoliday = Object.values(holidays).reduce((latest, holiday) => {
    const holidayDate = new Date(holiday.date)
    if

