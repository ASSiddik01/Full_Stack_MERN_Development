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