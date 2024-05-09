const add = function(...numbers) {
	let array = [];
  for (number of numbers) {
    array.push(number);
  }
  return array.reduce((result, item) => result + item, 0);
};

const subtract = function(...numbers) {
  let array = [];
  for (number of numbers) {
    array.push(number);
  }
  return array.reduce((result, item) => result - item);
	
};

const sum = function(numbers) {
  return numbers.reduce((result, item) => result + item, 0);
	
};

const multiply = function(numbers) {
  return numbers.reduce((result, item) => result * item);

};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  }
  if (number === 1) {
    return 1;
  } return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
