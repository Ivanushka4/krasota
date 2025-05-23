document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
 });
 
 document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
 });
 
 window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
 });
 
 document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
 
    // Получаем значения из полей формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();
 
    // Простейшая валидация
    if (!name || !email || !phone || !date || !time) {
        alert("Пожалуйста, заполните все поля.");
        return; // Выходим из функции, если есть пустые поля
    }
 
    // Выводим данные в консоль
    console.log("Запись на прием:");
    console.log("Имя:", name);
    console.log("Email:", email);
    console.log("Телефон:", phone);
    console.log("Дата:", date);
    console.log("Время:", time);
 
    // Закрываем модальное окно после успешной записи
    document.getElementById('modal').style.display = 'none';
 
    // Очищаем форму после успешной записи
    this.reset();
 });