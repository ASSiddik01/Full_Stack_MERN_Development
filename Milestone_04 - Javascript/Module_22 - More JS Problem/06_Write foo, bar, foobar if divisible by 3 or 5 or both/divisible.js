for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Football');
    }else if (i % 3 == 0) {
        console.log('foot');
    } else if (i % 5 == 0) {
        console.log('ball');
    } else {
        console.log(i);
    }

}