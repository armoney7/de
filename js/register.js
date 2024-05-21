document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('registerFullName').value;
    const phone = document.getElementById('registerPhone').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const phonePattern = /^\+7\d{10}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!phonePattern.test(phone)) {
        alert('Пожалуйста, введите правильный российский номер телефона.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('Пароль должен быть не короче 6 символов, содержать только английские буквы и хотя бы одну цифру.');
        return;
    }

    if (fullName && phone && username && password) {
        alert('Регистрация прошла успешно!');
        // Здесь может быть ваш код для сохранения данных пользователя или отправки на сервер
        // Например, можно использовать AJAX запрос для отправки данных на сервер
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
