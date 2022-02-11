document.getElementById('deposite_button').addEventListener('click', function () {
    // 1. Get Deposite value
    const depositeInput = document.getElementById('deposite_amount');
    const depositeAmount = depositeInput.value;

    // 2. Get Previous Deposite
    const previousDepositeTotal = document.getElementById('deposite_total');
    const previousDepositeAmount = (previousDepositeTotal.innerText);

    // 3. Set Deposite amount
    previousDepositeTotal.innerText = depositeAmount;

    // Clear
    depositeInput.value = '';

})