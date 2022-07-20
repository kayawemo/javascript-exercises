const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;

};

const multiply = function(array) {
    let total = 1;
    for (let i = 0; i < array.length; i++) {
        total *= array[i];
    }
    return total;

};

const power = (a, b) =>  Math.pow(a, b);

const factorial = a => {
    if (a === 0) return 1;
    return  a * factorial((a - 1));
	
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
