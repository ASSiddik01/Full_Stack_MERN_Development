var iPhone = 78000;
var oppp = 23000;
var samsung = 60000;
var myBudget = 70000;
var samsungIsNew = false;

if (iPhone < myBudget) {
    console.log('Iphone kinbo ki anando');
} else if (samsung < myBudget) {
    if (samsungIsNew == true) {
        console.log('Samsung kinbo');
    } else {
        console.log('Samsung New den mama');
    }
} else if (oppp < myBudget) {
    console.log('Olpo takai oppo valo oppo kinbo ami');
} else {
    console.log('Aj gorib bole phone kinte parlam na');
}

// Nested if else
if (samsung < myBudget) {
    if (samsungIsNew == true) {
        console.log('Samsung kinbo');
    } else {
        console.log('Samsung New den mama');
    }
}

