function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);

    //Clear Deposite field
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(fieldId, amount) {
    const previousTotal = document.getElementById(fieldId);
    const previousText = previousTotal.innerText;
    const previousAmount = parseFloat(previousText);

    //3 Calculation Total 
    const totalAmount = previousAmount + amount;

    //4 Set Total 
    previousTotal.innerText = totalAmount;
}

function getCurrentBalance() {
    //6.Get previous balace
    const previousBalanceTotal = document.getElementById('balance_total');
    const previousBalanceAmount = parseFloat(previousBalanceTotal.innerText);
    return previousBalanceAmount;
}

function updateBalance(amount, isAdd) {
    //6.Get previous balace
    const previousBalanceTotal = document.getElementById('balance_total');

    const previousBalanceAmount = getCurrentBalance();

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

    // 4 error handel
    if (depositeAmount > 0) {
        //2 Update total
        updateTotalField('deposite_total', depositeAmount);

        // 3. Update Total Balance
        updateBalance(depositeAmount, true);
    }

});



// Withdrow Handel
document.getElementById('withdrow_button').addEventListener('click', function () {

    // 1. get Withdrow amount
    const withdrowAmount = getInputValue('withdraw_amount');

    // Reject negetive balance
    const currentBalance = getCurrentBalance();

    // 4 Error Handle
    if (withdrowAmount > 0 && withdrowAmount < currentBalance) {
        // 2. Update total
        updateTotalField('withdrow_total', withdrowAmount);

        // 3. Update Total Balance
        updateBalance(withdrowAmount, false);
    }

    if (withdrowAmount > currentBalance) {
        alert('You can not withdrow then your savings amount');
    }

})