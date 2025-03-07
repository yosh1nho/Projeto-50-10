document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'As palavras-passe não são iguais!';
        event.preventDefault();
    } else if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        errorMessage.textContent = 'A palavra-passe deve ter pelo menos 8 caracteres e incluir um número e um caractere especial!';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
    }
});