function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    } else {
        return getPin();
    }
}


function generatePin() {
    const pin = getPin()
    document.getElementById('pin_show').value = pin;
}


// Key pad
document.getElementById('key_pad').addEventListener('click', function (event) { 
    const number = event.target.innerText;
    const givePin = document.getElementById('pin_input');
    if (isNaN(number)) {
        if (number == 'C') {
            givePin.value = '';
        }
    } else {
        const previousPin = givePin.value;
        const newPin = previousPin + number;
        givePin.value = newPin; 
    }
    
})