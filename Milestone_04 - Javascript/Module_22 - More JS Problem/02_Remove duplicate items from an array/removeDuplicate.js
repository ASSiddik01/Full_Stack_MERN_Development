let number = [23, 45, 12, 34, 23, 66, 43, 45, 12];

function removeDuplicate(number) {
    const unique = [];
    for (let element of number) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    console.log(unique);
}

removeDuplicate(number);