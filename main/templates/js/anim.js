document.addEventListener("DOMContentLoaded", function(event) {


const animatedBox = document.querySelector('.animated-box');

    

    function checkScroll() {
        const rect = animatedBox.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Проверяем, находится ли элемент в области видимости
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            // Добавляем класс анимации
            animatedBox.classList.add('fadeInUp');
            animatedBox.classList.add('animated');
        } else {
            // Удаляем класс анимации, чтобы она сработала снова при повторном скролле
            animatedBox.classList.remove('fadeInUp');
            animatedBox.classList.remove('animated');
        }
    }

    // Слушаем событие прокрутки
    window.addEventListener('scroll', checkScroll);

    // Проверяем при загрузке страницы
    checkScroll();
});