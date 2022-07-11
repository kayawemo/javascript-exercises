const leapYears = function (year) {

//     To determine whether a year is a leap year, follow these steps:

// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

    // //My solution (it worked :))
    // if (year % 4 === 0) {
    //     if (year % 100 === 0) {
    //         if (year % 400 === 0) return true;
    //         else return false;
    //     } else return true;
    // } else return false;


    // A more tidy solution
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
