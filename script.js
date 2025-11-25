document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки этапов и контентные секции
    const stageButtons = document.querySelectorAll('.stage-btn');
    const stageContents = document.querySelectorAll('.stage-content');
    
    // Добавляем обработчики событий для кнопок
    stageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем ID этапа из data-атрибута
            const stageId = this.getAttribute('data-stage');
            
            // Удаляем класс active со всех кнопок и секций
            stageButtons.forEach(btn => btn.classList.remove('active'));
            stageContents.forEach(content => content.classList.remove('active'));
            
            // Добавляем класс active к текущей кнопке и соответствующей секции
            this.classList.add('active');
            document.getElementById(`stage-${stageId}`).classList.add('active');
        });
    });
    
    // Добавляем плавную прокрутку при навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Добавляем анимацию при наведении на изображения
    const carImages = document.querySelectorAll('.car-image img');
    carImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});