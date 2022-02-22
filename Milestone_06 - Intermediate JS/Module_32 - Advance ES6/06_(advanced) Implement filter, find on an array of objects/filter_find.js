const products = [
    { name: 'iphone 6', price: 46000, color: 'silver' },
    { name: 'watch', price: 1500, color: 'silver' },
    { name: 'Canon camera', price: 19000, color: 'black' },
]

const blacks = products.filter(product => product.color == "black");
console.log(blacks);
console.log("======================");
const silver = products.find(product => product.color == "silver");
console.log(silver);