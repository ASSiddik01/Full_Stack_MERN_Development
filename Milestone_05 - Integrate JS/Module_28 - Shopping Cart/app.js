function updateCaseNumber(product, isIncrease, price) {
    // 1.Get case input
    const productInput = document.getElementById(product + '_number');

    let productNumber = productInput.value;
    // 2.Set case value
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update case price
    const casePrice = document.getElementById(product + '_price');
    casePrice.innerText = productNumber * price;

}

// Phone handle
document.getElementById('phone_plus').addEventListener('click', function () {
    updateCaseNumber('phone', true, 1219);
});

document.getElementById('phone_minus').addEventListener('click', function () {
    updateCaseNumber('phone', false, 1219);
});


// Case handle
document.getElementById('case_plus').addEventListener('click', function () {
    updateCaseNumber('case', true, 59);
});

document.getElementById('case_minus').addEventListener('click', function () {
    updateCaseNumber('case', false, 59);
});

