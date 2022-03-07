const alartME = () => {
    alert('Be serious');
}


const confirmMe = () => {
    const response = confirm('Are you go to picnic');
    if (response === true) {
        alert('Give me fee in bikas')
    } else {
        alert('Ohh! Very sad')
    }
}


const promtMe = () => {
    const name = prompt('Type your name');
    if (name) {
        alert(`Your name is: ${name}`);
    }
}