function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;

    const inputAmount = parseFloat(inputText);

    //Clear Deposite field
    inputField.value = '';

    return inputAmount;


}



// Deposite handler
document.getElementById('deposite_button').addEventListener('click', function () {
    //1 Get Deposite amount
    const depositeAmount = getInputValue('deposite_amount');

    //2 Get Previous depositie
    const previousDepositeTotal = document.getElementById('deposite_total');
    const previousDepositeText = previousDepositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    //3 Calculation Total Deposite
    const totalDepositeAmount = previousDepositeAmount + depositeAmount;

    //4 Set Total Deposite
    previousDepositeTotal.innerText = totalDepositeAmount;

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



    // 2. get previous withdown amount
    const previousWithdrowTotal = document.getElementById('withdrow_total');
    const previousWithdrowText = previousWithdrowTotal.innerText;
    const previousWithdrowAmount = parseFloat(previousWithdrowText)

    // 3. Calculation total Withdrow
    const totalWithdrowAmount = previousWithdrowAmount + withdrowAmount;

    // 4. Set Total withdrow
    previousWithdrowTotal.innerText = totalWithdrowAmount;

    //6.Get previous balace
    const previousBalanceTotal = document.getElementById('balance_total');
    const previousBalanceAmount = parseFloat(previousBalanceTotal.innerText);

    //7. Update Total Balance
    previousBalanceTotal.innerText = previousBalanceAmount - withdrowAmount;

})