function patriChai(age, earning) {
    console.log(age);
    console.log(earning);

    function canMerry(expense) {
        const remaining = earning - expense;
        if (remaining > 30000) {
            return true;
        } else {
            return false;
        }
    }
}

patriChai(21, 100000);
patriChai(21, 100000);