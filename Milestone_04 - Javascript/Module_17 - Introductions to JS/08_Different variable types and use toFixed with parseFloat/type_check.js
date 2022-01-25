var name = "Shama";
var age = 23;
var hscPass = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof hscPass);

// Special Case
var number1 = 0.1;
var number2 = 0.2;

var totalNumber = number1 + number2;
var fixedValueNumber = totalNumber.toFixed(2);
var newNumber = parseFloat(fixedValueNumber);
console.log(typeof newNumber);