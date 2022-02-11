const button = document.getElementById('sumbit_button').addEventListener('click', function () {
    const emailField = document.getElementById('user_email');
    const passwordField = document.getElementById('user_password');
    const userEmail = emailField.value;
    const userPassword = passwordField.value;

    if (userEmail == "aaa@gmail.com" && userPassword == "aaa") {
        window.location.href = 'banking.html'
    } else {
        alart('Error');
    }
})