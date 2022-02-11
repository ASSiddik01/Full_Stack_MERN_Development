function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;

    const inputAmount = parseFloat(inputText);

    //Clear Deposite field
    inputField.value = '';

    return inputAmount;
}

function updateTotalField(fieldId, Amount) {
    const previousTotal = document.getElementById(fieldId);
    const previousText = previousTotal.innerText;
    const previousAmount = parseFloat(previousText);

    //3 Calculation Total 
    const totalAmount = previousAmount + Amount;

    //4 Set Total 
    previousTotal.innerText = totalAmount;
}



// Deposite handler
document.getElementById('deposite_button').addEventListener('click', function () {
    //1 Get Deposite amount
    const depositeAmount = getInputValue('deposite_amount');

    //2 Update total
    updateTotalField('deposite_total', depositeAmount);

    //6.Get previous balace
    const previousBalanceTotal = document.getElementById('balance_total');
    const previousBalanceAmount = parseFloat(previousBalanceTotal.innerText);

    //7. Update Total Balance
    previousBalanceTotal.innerText = previousBalanceAmount + depositeAmount;




});

// Withdrow Handel
document.getElementById('withdrow_button').addEventListener('click', function () {

    // 1. get Withdrow amount
    const withdrowAmount = getInputValue('withdraw_amount');

    // 2. Update total
    updateTotalField('withdrow_total', withdrowAmount);

    //6.Get previous balace
    const previousBalanceTotal = document.getElementById('balance_total');
    const previousBalanceAmount = parseFloat(previousBalanceTotal.innerText);

    //7. Update Total Balance
    previousBalanceTotal.innerText = previousBalanceAmount - withdrowAmount;

})