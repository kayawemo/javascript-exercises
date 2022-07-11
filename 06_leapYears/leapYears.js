const leapYears = function (year) {

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
