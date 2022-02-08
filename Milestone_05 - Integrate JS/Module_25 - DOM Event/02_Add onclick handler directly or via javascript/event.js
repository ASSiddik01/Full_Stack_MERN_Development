function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make_blue');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}