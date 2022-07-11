const sumAll = function (num1, num2) {


    // Check for negative values
    if ((num1 < 1 || num2 < 1)) return "ERROR";

    // Check for if any of the parameters is not a number
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    
    // if the first number is greater than the second number, swap them!
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
