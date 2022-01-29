// ১৩ এর নামতা
function namta(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(i, 'x', num, '=', i * num);
    }
}

namta(13);

// uppercase to lowercase
function caseConvert(name) {
    var lower = name.toLowerCase();
    console.log(lower);
}

caseConvert("SHAMA")

// Full name
function fullName(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
fullName('Abu', 'Shama');

// Square
function square(n) {
    return n * n;
}
console.log(square(4));

// Pizza
var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

var pepperoni = pizza.toppings[2];

console.log(pepperoni);