var i = 0;
while (i < 10) {
    // console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

for (var i = 0; i <= 10; i++) {
    // console.log(i);
    if (i == 8) {
        break;
    }
}

var numbers = [23, 45, 24, 64, 22, 5, 66, 36, 25];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 50) {
        continue;
    }
    console.log(number);
}


