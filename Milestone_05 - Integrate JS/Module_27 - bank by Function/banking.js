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

function updateBalance(amount,isAdd) {
     //6.Get previous balace
     const previousBalanceTotal = document.getElementById('balance_total');
     const previousBalanceAmount = parseFloat(previousBalanceTotal.innerText);
 
     //7. Update Total Balance
    if (isAdd == true) {
        previousBalanceTotal.innerText = previousBalanceAmount + amount;
    } else {
        previousBalanceTotal.innerText = previousBalanceAmount - amount;
    }
     
}



// Deposite handler
document.getElementById('deposite_button').addEventListener('click', function () {
    //1 Get Deposite amount
    const depositeAmount = getInputValue('deposite_amount');

    //2 Update total
    updateTotalField('deposite_total', depositeAmount);

    // 3. Update Total Balance
    updateBalance(depositeAmount, true);

});

// Withdrow Handel
document.getElementById('withdrow_button').addEventListener('click', function () {

    // 1. get Withdrow amount
    const withdrowAmount = getInputValue('withdraw_amount');

    // 2. Update total
    updateTotalField('withdrow_total', withdrowAmount);

    // 3. Update Total Balance
    updateBalance(withdrowAmount, false);

})