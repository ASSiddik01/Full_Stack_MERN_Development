const phones = [
    { brand: 'Samsung', price: 35000, storage: '32gb', color: 'Black' },
    { brand: 'iPhone 6', price: 55000, storage: '32gb', color: 'Black' },
    { brand: 'iPhone 7', price: 55000, storage: '32gb', color: 'Black' },
    { brand: 'Nokia N95', price: 15000, storage: '32gb', color: 'Black' },
    { brand: 'Walton', price: 12000, storage: '32gb', color: 'Black' },
    { brand: 'oppo V23', price: 13999, storage: '32gb', color: 'Black' },
    { brand: 'oppo R1', price: 13999, storage: '32gb', color: 'Black' },
    { brand: 'Vivo y21', price: 17490, storage: '32gb', color: 'Black' },
];

function findProduct(products, searchText) {
    for (const product of products) {
        if (product.brand.includes(searchText)) {
            console.log(product.brand);
        }
    }
}

findProduct(phones, 'oppo');