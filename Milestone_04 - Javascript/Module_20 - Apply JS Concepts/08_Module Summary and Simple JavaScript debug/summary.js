// Leapyear
function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

var year = 2020;
var isLeapYear = leapYear(year);
console.log(year, "is leap year =", isLeapYear);

// Even odd functions
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var number = 32;
var even = isEven(number);
console.log(number, "is a Even number =", even);

// Hour to Minutes
function hourToMinutes(hour) {
    var minutes = hour * 60;
    return minutes;
}
var myHour = 3;
var minute = hourToMinutes(myHour);
console.log(myHour, 'hours =', minute, 'minutes');

