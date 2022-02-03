// const products = [
//     { productName: 'laptop', price: 45000 },
//     { productName: 'phone', price: 25000 },
//     { productName: 'watch', price: 5000 },
//     { productName: 'headphone', price: 2000 }
// ];

// let totalPrice = 0;

// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }

// console.log(totalPrice);

const products = [
    { productName: 'laptop', price: 45000, quantity: 1 },
    { productName: 'phone', price: 25000, quantity: 1 },
    { productName: 'watch', price: 5000, quantity: 2 },
    { productName: 'headphone', price: 2000, quantity: 3 }
];

let totalPrice = 0;

for (const product of products) {
    let productPrice = product.price * product.quantity;
    totalPrice = totalPrice + productPrice;
}

console.log(totalPrice);