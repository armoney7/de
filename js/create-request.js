document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const carMake = document.getElementById('carMake').value;
    const carModel = document.getElementById('carModel').value;
    const problemDescription = document.getElementById('problemDescription').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;

    if (carMake && carModel && problemDescription && bookingDate && bookingTime) {
        alert('Заявка создана!');
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});
