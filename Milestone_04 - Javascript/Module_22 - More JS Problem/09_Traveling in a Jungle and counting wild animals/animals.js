function animalsCount(miles) {
    const first10Miles = 10;
    const second10Miles = 50;
    const restMilesAnimals = 100;
    if (miles <= 10) {
        const count = miles * first10Miles;
        return count;
    } else if (miles <= 20) {
        const firstPathAnimals = 10 * first10Miles;
        const restMiles = miles - 10;
        const secondPathAnimals = restMiles * second10Miles;
        const totalAnimals = firstPathAnimals + secondPathAnimals;
        return totalAnimals;
    } else {
        const firstPathAnimals = 10 * first10Miles;
        const secondPathAnimals = 10 * second10Miles;
        const restMiles = miles - 20;
        const restPathAnimals = restMiles * restMilesAnimals;
        const totalAnimals = firstPathAnimals + secondPathAnimals + restPathAnimals;
        return totalAnimals;
    }
}

var animals = animalsCount(23);
console.log(animals);