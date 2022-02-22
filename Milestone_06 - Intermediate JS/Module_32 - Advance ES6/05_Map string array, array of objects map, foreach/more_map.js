const products = [
    { name: 'iphone 6', price: 46000, color: 'silver' },
    { name: 'watch', price: 1500, color: 'silver' },
    { name: 'Canon camera', price: 19000, color: 'black' },
]

// let productName = products.map(product=>product.name);
let product = products.map(product => product);
// console.log(product);
products.map(product => console.log(product));
// products.forEach(product=>console.log(product));