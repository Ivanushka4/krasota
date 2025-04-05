document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
 
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
 
    // Простейшая проверка логина и пароля
    if (username === 'user' && password === 'password') { // Замените на свою логику аутентификации
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('userInfo').classList.remove('hidden');
        document.getElementById('userNameDisplay').textContent = username;
 
        // Очищаем поля ввода
        this.reset();
        errorMessage.textContent = ''; // Скрываем сообщение об ошибке
    } else {
        errorMessage.textContent = 'Неверное имя пользователя или пароль.';
    }
 });
 
 document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('userInfo').classList.add('hidden');
 });