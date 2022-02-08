// Method 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Method 3
const blueButton = document.getElementById('make_blue');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Annonymus Functions
const greenButton = document.getElementById('make_green');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// Add Event Listener
const goldenRodButton = document.getElementById('make_goldenRod');
goldenRodButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenRod';
}

// Add Event Listener
const hotpinkButton = document.getElementById('make_hotpink');
hotpinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});

// Direct ShortCut
document.getElementById('make_lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})


