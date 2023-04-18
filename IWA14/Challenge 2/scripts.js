
//This code defines three functions add, multiply, and internal.
function add ( a, b ) { //The 'add' function takes two arguments a and b and returns their sum
    return a + b;
}
function multiply (a, b ){ //The multiply function also takes two arguments a and b and returns their product.
    return a * b;
}
function internal() {
	add = this.add(this.internal.a, this.internal.b); /*The internal function assigns the sum of internal.a and
                        internal.b to a variable using the add function. Then it assigns the product of add and this.internal.c to
                        a variable named multiply using the multiply function */
	multiply = this.multiply (add, this.internal.c); //changed 
    console.log(multiply)  // changed 'retun this' into 'console.log(multiply)'
}

// Not allowed to change below this

                /*Therefore, when example1.calculate() and example2.calculate() are called, 
                the internal function is called twice, each time with different values of a, b, and c, 
                and the result of the calculations is logged to the console.*/
  const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()