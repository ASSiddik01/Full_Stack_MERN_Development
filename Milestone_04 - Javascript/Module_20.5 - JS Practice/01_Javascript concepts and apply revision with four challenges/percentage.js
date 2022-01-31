function getInterest(capital, percent) {
    let i = capital * percent / 100;
    console.log(`You want ${percent} interest on ${capital}. So Interest is ${i}`);
}

getInterest(3400, 6);