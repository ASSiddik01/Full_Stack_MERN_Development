function sum(i) {

    if (i > 50) {
        return;
    }
    console.log(i)
    sum(++i);
}

sum(1);