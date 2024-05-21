document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordPattern.test(password)) {
        alert('Пароль должен быть не короче 6 символов, содержать только английские буквы и хотя бы одну цифру.');
        return;
    }

    // Проверка логина и пароля для администратора
    if (phone === 'newfit' && password === 'qsw123') {
        // Перенаправление на административную панель
        window.location.href = 'admin-panel.html';
    } else {
        // Перенаправление на обычный личный кабинет
        window.location.href = 'dashboard.html';
    }
});
