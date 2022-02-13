function updateProduceNumber(product, isIncrease, price) {
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

    // Calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '_number');
    let productNumber = parseInt(productInput.value);
    return productNumber
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    
    // Calculation total price
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // Update total price
    document.getElementById('sub_total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total_price').innerText = total;
}

// Phone handle
document.getElementById('phone_plus').addEventListener('click', function () {
    updateProduceNumber('phone', true, 1219);
});

document.getElementById('phone_minus').addEventListener('click', function () {
    updateProduceNumber('phone', false, 1219);
});


// Case handle
document.getElementById('case_plus').addEventListener('click', function () {
    updateProduceNumber('case', true, 59);
});

document.getElementById('case_minus').addEventListener('click', function () {
    updateProduceNumber('case', false, 59);
});

