// Добавляем обработчик события прокрутки
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.menu');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Функция для быстрой прокрутки
function smoothScroll(targetId, duration) {
    const targetElement = document.getElementById(targetId);
    const startPosition = window.pageYOffset; // Начальная позиция прокрутки
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition; // Целевая позиция
    const distance = targetPosition - startPosition; // Расстояние, которое нужно прокрутить
    let startTime = null;

    // Анимация
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime; // Время, прошедшее с начала анимации
        const run = ease(timeElapsed, startPosition, distance, duration); // Рассчитать текущее значение прокрутки
        window.scrollTo(0, run); // Прокрутка до текущей позиции
        if (timeElapsed < duration) requestAnimationFrame(animation); // Продолжать анимацию
    }

    // Функция easing для плавной прокрутки
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation); // Запуск анимации
}

// Обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    var contactModal = document.getElementById('contact-modal');
    var hoursModal = document.getElementById('hours-modal');
    var contactsLink = document.getElementById('contacts-link');
    var workingHoursLink = document.getElementById('working-hours-link');
    var closeButtons = document.getElementsByClassName('close-button');

    // Открытие модального окна при клике на "Contacts"
    contactsLink.onclick = function(event) {
        event.preventDefault();
        contactModal.style.display = 'block';
    };

    // Открытие модального окна при клике на "Working hours"
    workingHoursLink.onclick = function(event) {
        event.preventDefault();
        hoursModal.style.display = 'block';
    };

    // Закрытие модального окна
    for (let button of closeButtons) {
        button.onclick = function() {
            contactModal.style.display = 'none';
            hoursModal.style.display = 'none';
        };
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
        if (event.target === hoursModal) {
            hoursModal.style.display = 'none';
        }
    };

    const burger = document.getElementById('burger');
    const menuList = document.getElementById('menu-list');

    // Обработчик клика по бургер-меню
    burger.onclick = function() {
        menuList.classList.toggle('active'); // Переключить класс "active"
    };

    // Обработчики для плавной прокрутки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            if (targetId) { // Проверка на существование элемента
                smoothScroll(targetId, 100); // Вызываем функцию с целью прокрутки за 1000 мс
            }
        });
    });
});
