const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const first = data.lists [0][1]
const second = data.lists [1][1]
const third = data.lists [2][1]

/*const { first = [1] } = data.lists.find(([name]) => name === 'first') || {};  // I extract them from the lists array by searching for the corresponding name.
const { second = [1] } = data.lists.find(([name]) => name === 'second') || {};
const { third = [1] } = data.lists.find(([name]) => name === 'third') || {}; */
//I provide a default value of [1] for first, second, and third in case they are not found in data.

const result = [];

//I fixed the comparison in extractBiggest to compare the values at the last index of the arrays, rather than the indices themselves.
const extractBiggest = () => { 
  if (first[first.length - 1] >= second[second.length - 1] && first[first.length - 1] >= third[third.length - 1]) {
    return first.pop();
  }

  if (second[second.length - 1] >= third[third.length - 1]) {
    return second.pop();
  }

  return third.pop();
};

// Only edit above

//Below is another way to code this
/*for (let i = 0; i < 15; i++) {
  result.push(extractBiggest());
}

console.log(result);*/


result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)