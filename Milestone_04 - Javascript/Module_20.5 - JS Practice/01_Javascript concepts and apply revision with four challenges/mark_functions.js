function yourGrade(mark) {
    if (mark >= 80) {
        console.log('You got A+.');
    } else if (mark >= 70) {
        console.log('You got A.');
    } else if (mark >= 60) {
        console.log('You got B.');
    } else if (mark >= 50) {
        console.log('You got C.');
    } else if (mark >= 40) {
        console.log('You got D.');
    } else if (mark >= 33) {
        console.log('You got E.');
    } else if (mark >= 0) {
        console.log('You are Failed.');
    } else {
        console.log('Please Input your valid Number.');
    }
}

yourGrade(40);