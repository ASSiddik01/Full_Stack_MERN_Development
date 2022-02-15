const products = [
    'iphone 6 32gb price 56000',
    'lenovo laptop i5 120gb SSD 4gb ram',
    'lenovo  i5 120gb SSD 4gb ram laptop',
    'Samsungs Phone 32gb price 34000',
    'S8 Samsung Phone 32gb price 34000'
]

const searchString = 'laptop';

const output = [];

// index of
for (const product of products) {
    if (product.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
        // output.push(product);
    }

}


// includes
for (const product of products) {
    if (product.toLowerCase().includes(searchString.toLowerCase())) {
        // output.push(product);
    }

}

// stratwith
for (const product of products) {
    if (product.toLowerCase().startsWith(searchString.toLowerCase())) {
        // output.push(product);
    }

}

// stratwith
for (const product of products) {
    if (product.toLowerCase().endsWith(searchString.toLowerCase())) {
        output.push(product);
    }

}



console.log(output);