const phones = [
    { brand: 'Samsung', price: 35000, storage: '32gb', color: 'Black' },
    { brand: 'iPhone', price: 55000, storage: '32gb', color: 'Black' },
    { brand: 'Nokia', price: 15000, storage: '32gb', color: 'Black' },
    { brand: 'Walton', price: 12000, storage: '32gb', color: 'Black' },
    { brand: 'oppo', price: 13999, storage: '32gb', color: 'Black' },
    { brand: 'Vivo', price: 17490, storage: '32gb', color: 'Black' },
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);
