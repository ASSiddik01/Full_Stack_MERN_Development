function updateCaseNumber(isIncrease) {
    // 1.Get case input
    const caseInput = document.getElementById('case_number');
    let caseNumber = caseInput.value;
    // 2.Set case value
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    // update case price
    const casePrice = document.getElementById('case_price');
    casePrice.innerText = caseNumber * 59;
    
}

document.getElementById('case_plus').addEventListener('click', function () {
    updateCaseNumber(true);
});

document.getElementById('case_minus').addEventListener('click', function () {
    updateCaseNumber(false)
});

