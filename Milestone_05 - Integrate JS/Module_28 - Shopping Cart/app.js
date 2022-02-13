document.getElementById('case_plus').addEventListener('click', function () {
    // 1.Get case input
    const caseInput = document.getElementById('case_number');
    const caseCount = caseInput.value;
    // 2.Set case value
    caseInput.value = parseInt(caseCount) + 1;
    // console.log(caseCount);
})