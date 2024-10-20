window.addEventListener('scroll', function() {
    var nav = document.querySelector('.menu');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

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
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
        if (event.target == hoursModal) {
            hoursModal.style.display = 'none';
        }
    };
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const menuList = document.getElementById('menu-list');

    // Обработчик клика по бургер-меню
    burger.onclick = function() {
        menuList.classList.toggle('active'); // Переключить класс "active"
    };
});

