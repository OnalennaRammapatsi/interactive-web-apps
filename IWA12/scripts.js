const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}
// Edit below line

/*The code starts by selecting three different elements with the "data-key" attribute set to "order1", "order2", and "order3"
 respectively using the document.querySelector method.*/
//These elements are stored in variables called root1, root2, and root3.
const book1 = {
    status: document.querySelector('#book1 .status'),
    reserve: document.querySelector('#book1 .reserve'),
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin')
}
const book2 = {
    status: document.querySelector('#book2 .status'),
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin')
}
const book3 = {
    status: document.querySelector('#book3 .status'),
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin')
}
function updateBookStatus(book) {
    const status = book.status.textContent.trim()
    const statusInfo = STATUS_MAP[status]
    book.status.style.color = statusInfo.color
    book.reserve.disabled = !statusInfo.canReserve
    book.checkout.disabled = !statusInfo.canCheckout
    book.checkin.disabled = !statusInfo.canCheckIn
}

/*for each of these three elements, the code selects the child elements with the class names "biscuits", "donuts", "pancakes", and "status"
 using the querySelector method with a CSS selector string. */
updateBookStatus(book1)
updateBookStatus(book2)
updateBookStatus(book3)
const overdue = book1.checkin
const reserveCheckout = overdue.style.color = ''
const reserved = book2.checkin
const reserveCheckin = reserved.style.color = ''
const shelf = book3.checkin
const checkIn = shelf.style.color = ''

/*At the final the code updates the text content of the "status" element based on the value of the data-delivered attribute of the corresponding "root" element.
If the value of this attribute is "true", the text content of the "status" element is set to "Delivered". Otherwise, it is set to "Pending".*/