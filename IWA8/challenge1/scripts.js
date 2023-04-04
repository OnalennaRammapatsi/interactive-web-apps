const leoName = 'Leo Musvaire';
const leoSurname = 'Some Surname'; //added a surname variable
const leoNumber = '2';
const leoStreet = 'Church St.';
const leoPostal = '3105';
const leoBalance = '-10';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';
const sarahNumber = '13';
const sarahStreet = 'William Close';
const sarahPostal = '0310';


// Only change below this line

const leo = {
	name: leoName +' '+ leoSurname,
	balance: leoBalance,
	accessId:  '47afb389-8014-4d0b-aff3-e40203d2107f', //changed 'access id' to 'accessId' and added a semi collon
	age: 24,
	address: {
		number:leoNumber,
		street:leoStreet,
		postalcode: leoPostal // changed 'postal-code' to 'postalcode and remoced the dash
	}
};

const sarah  = {
	name: sarahName + ' ' + sarahSurname, // fixed spelling error 
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8', //changed 'access id' to 'accessId' and added a semi collon
	balance: sarahBalance,
	address: { //added an address object
		number: sarahNumber,
		street: sarahStreet,
		postalcode: sarahPostal // changed 'postal-code' to 'postalcode and remoced the dash
	}
};

console.log(leo, leo.address.postalcode); //access address object and used dot notation to access postalcode
console.log(sarah, sarah.address.postalcode); //access address object and used dot notation to access postalcode