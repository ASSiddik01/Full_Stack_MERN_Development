function singara(taka) {
    console.log('Vaiya singarar jonno', taka, 'dise');
    console.log('mama ei nen', taka, 'taka singara den');
    var singaraPrice = 3;
    var singaraQuantity = taka / singaraPrice;
    console.log('Ai naw tmr', parseInt(singaraQuantity), 'ta singara')
    var ferot = taka % singaraPrice;
    return ferot;
}

var ferot = singara(20);
console.log('Vaiya', ferot, 'taka ferot dise');