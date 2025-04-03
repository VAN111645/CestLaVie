document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});







document.querySelectorAll(".slider").forEach((slider) => {
    const slides = slider.querySelector(".slides");
    const slidesArray = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let index = 0;

    function updateSlideWidth() {
        const slideWidth = slider.offsetWidth;
        slidesArray.forEach(slide => {
            slide.style.width = `${slideWidth}px`; // Устанавливаем новую ширину для каждого слайда
        });
        slides.style.width = `${slidesArray.length * slideWidth}px`;
        showSlide(index);
    }

    function showSlide(i) {
        if (i >= slidesArray.length) index = 0;
        if (i < 0) index = slidesArray.length - 1;
        slides.style.transform = `translateX(${-index * slider.offsetWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index--;
        showSlide(index);
    });

    // Поддержка свайпа на мобильных устройствах
    let startX = 0;

    slides.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            index++;
        } else if (startX < endX - 50) {
            index--;
        }
        showSlide(index);
    });

    // Автообновление ширины при изменении экрана
    window.addEventListener("resize", updateSlideWidth);

    // Вызываем обновление ширины при загрузке страницы
    updateSlideWidth();
});













function toggleMenu() {
    const circles = document.querySelectorAll('.social-container .circle.hidden');

    circles.forEach((circle, index) => {
        if (circle.style.opacity === "1") {
            circle.style.opacity = "0";
            circle.style.pointerEvents = "none";
            circle.style.transform = "translateY(0)";
        } else {
            circle.style.opacity = "1";
            circle.style.pointerEvents = "all";
            circle.style.transform = `translateY(-${(index + 1) * 55}px)`;
        }
    });
}


function updateCirclePositions() {
    const circles = document.querySelectorAll('.circle.hidden');
    const isSmallScreen = window.matchMedia("(min-width: 300px) and (max-width: 500px)").matches;
    
    circles.forEach((circle, index) => {
        const translateValue = isSmallScreen ? 45 : 55; // Меняем значение на 45px для маленьких экранов
        circle.style.transform = `translateY(-${(index + 1) * translateValue}px)`;
    });
}

// Вызываем функцию при загрузке страницы
updateCirclePositions();

// Следим за изменением размера экрана
window.addEventListener("resize", updateCirclePositions);


