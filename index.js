let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');
let currentIndex = 0;
let slideWidth = images[0].clientWidth;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
