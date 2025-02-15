document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        event.preventDefault();
    } else if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long and include a number and a special character!';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
    }
});