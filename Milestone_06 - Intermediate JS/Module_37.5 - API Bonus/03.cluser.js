// const bank = owner => {
//     balance = 0;
//     return amount => {
//         balance = balance + amount;
//         return balance;
//     }
// }

// const Exembank = bank('Shama');
// console.log(Exembank(100));
// console.log(Exembank(100));
// console.log(Exembank(100));

// Extended Method
const bank = owner => {
    balance = 0;
    return {
        deposite: amount => {
            balance = balance + amount;
            return balance;
        },
        withdrow: amount => {
            balance = balance - amount;
            return balance;
        }
    }
}

const Exembank = bank('Shama');
console.log(Exembank.deposite(100));
console.log(Exembank.deposite(400));
console.log(Exembank.withdrow(100));
console.log(Exembank.deposite(50));

