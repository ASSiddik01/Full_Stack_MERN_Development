// Step 1
const shop = {
    name: "Siddik Store",
    address: "Chuadanga",
    profit: 50000,
    products: ['laptop', 'mobile', 'gadgets'],
    owner : {
        name: "Shama",
        positon: "head"
    },
    isExpensive : true
}

const stringified = JSON.stringify(shop);
console.log(stringified);

const parsed = JSON.parse(stringified);
console.log(parsed);