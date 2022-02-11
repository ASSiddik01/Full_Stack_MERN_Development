document.getElementById('deposite_button').addEventListener('click', function () {
    //1 Get Deposite amount
    const depositeField = document.getElementById('deposite_amount');
    // const depositeText = depositeField.value;
    const depositeAmount = parseFloat(depositeField.value);

    //2 Get Previous depositie
    const previousDepositeTotal = document.getElementById('deposite_total');
    // const previousDepositeText = previousDepositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeTotal.innerText);

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


})