// Пример данных о заявках (для демонстрации)
const requestsData = [
    {
        id: 1,
        fullName: "Иванов Иван Иванович",
        phone: "+79991234567",
        bookingDate: "2024-05-25",
        bookingTime: "14:00",
        car: "Toyota Camry",
        problemDescription: "Автомобиль не заводится",
        status: "новое"
    },
    {
        id: 2,
        fullName: "Петров Петр Петрович",
        phone: "+79992345678",
        bookingDate: "2024-05-26",
        bookingTime: "10:00",
        car: "Honda Civic",
        problemDescription: "Треснутое лобовое стекло",
        status: "подтверждено"
    },
    {
        id: 3,
        fullName: "Сидоров Сидор Сидорович",
        phone: "+79993456789",
        bookingDate: "2024-05-27",
        bookingTime: "16:00",
        car: "BMW X5",
        problemDescription: "Шум в двигателе",
        status: "отклонено"
    }
];

// Функция для отображения списка заявок на странице
function renderRequests(requests) {
    const requestsList = document.getElementById('requestsList');
    requestsList.innerHTML = ''; // Очистка списка заявок перед обновлением

    requests.forEach(request => {
        const requestElement = document.createElement('div');
        requestElement.classList.add('request');
        requestElement.innerHTML = `
            <h2>${request.fullName}</h2>
            <p><strong>Телефон:</strong> ${request.phone}</p>
            <p><strong>Дата и время бронирования:</strong> ${request.bookingDate}, ${request.bookingTime}</p>
            <p><strong>Автомобиль:</strong> ${request.car}</p>
            <p><strong>Описание проблемы:</strong> ${request.problemDescription}</p>
            <p><strong>Статус:</strong> ${request.status}</p>
            <button onclick="changeStatus(${request.id})">Изменить статус</button>
        `;
        requestsList.appendChild(requestElement);
    });
}

// Функция для изменения статуса заявки
function changeStatus(requestId) {
    // Ваш код для изменения статуса заявки (например, отправка запроса на сервер)
    // После изменения статуса, обновите список заявок (можно выполнить запрос на сервер для получения обновленных данных)
    // Просто для демонстрации, мы обновим статус локально

    const request = requestsData.find(request => request.id === requestId);
    if (request) {
        switch (request.status) {
            case 'новое':
                request.status = 'подтверждено';
                break;
            case 'подтверждено':
                request.status = 'отклонено';
                break;
            case 'отклонено':
                request.status = 'новое';
        }

        // После изменения статуса, обновляем список заявок
        renderRequests(requestsData);
    }
}

    // Инициализация страницы - отображение списка заявок при загрузке страницы
    renderRequests(requestsData);
    