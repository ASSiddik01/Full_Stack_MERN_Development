document.getElementById('deposite_button').addEventListener('click', function () {
    // Get Deposite amount
    const depositeField = document.getElementById('deposite_amount');
    const depositeAmount = depositeField.value;

    // Get total depositie
    const depositeTotal = document.getElementById('deposite_total');
    depositeTotal.innerText = depositeAmount;

    depositeField.value = '';

    
})