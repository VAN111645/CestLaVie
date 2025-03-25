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
    const slideWidth = slider.offsetWidth;
    const totalSlides = slidesArray.length;

    // Устанавливаем ширину .slides
    slides.style.width = `${totalSlides * slideWidth}px`;

    function showSlide(i) {
        if (i >= totalSlides) index = 0;
        if (i < 0) index = totalSlides - 1;
        slides.style.transform = `translateX(${-index * slideWidth}px)`;
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
    window.addEventListener("resize", () => {
        const newWidth = slider.offsetWidth;
        slides.style.width = `${totalSlides * newWidth}px`;
        showSlide(index);
    });
});

