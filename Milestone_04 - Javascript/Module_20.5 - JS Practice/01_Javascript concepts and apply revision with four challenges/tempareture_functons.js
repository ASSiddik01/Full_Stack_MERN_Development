function celsiusToFarenhite(celsius) {
    var farenhite = (celsius* 9/5)+32;
    return farenhite;
}

console.log(celsiusToFarenhite(4));


function farenhiteToCelsius(farenhite) {
    var celsius = (farenhite-32)* 5/9;
    return celsius;
}

console.log(farenhiteToCelsius(4));


