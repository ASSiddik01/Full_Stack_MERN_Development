document.getElementById('deposite_button').addEventListener('click', function () {
    //1 Get Deposite amount
    const depositeField = document.getElementById('deposite_amount');
    const depositeText = depositeField.value;
    // Empty error handle
    if (depositeText == '') {
        alert('Give a number');
        return;
    }
    const depositeAmount = parseFloat(depositeText);

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
    

    //5 Clear Deposite field
    depositeField.value = '';

});

// Withdrow Handel
document.getElementById('withdrow_button').addEventListener('click', function () {
    
    // 1. get Withdrow amount
    const withdrowField = document.getElementById('withdraw_amount');
    const withdrowInput = withdrowField.value;
    // Empty error handle
    if (withdrowInput == '') {
        alert('Give a number');
        return;
    }
    const withdrowAmount = parseFloat(withdrowInput);
    
    

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

    // 5. Clear withdrow input
    withdrowField.value = '';
    
    
})