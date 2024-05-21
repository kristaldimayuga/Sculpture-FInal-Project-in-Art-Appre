// Naglalagay ng shadow sa header pag wala sa "home" section
// document.addEventListener("DOMContentLoaded", function() {
//     var header = document.querySelector(".header");
//     var homeSection = document.getElementById("home");

//     // Function na nag lalagay ng "shadow" class sa header pag wala sa "home" section
//     function toggleHeaderShadow() {
//         if (window.scrollY >= homeSection.offsetHeight + homeSection.offsetTop ) {
//             header.classList.add("shadow");
//         } else {
//             header.classList.remove("shadow");
//         }
//     }

//     toggleHeaderShadow();

//     window.addEventListener("scroll", toggleHeaderShadow);
// });

// Nag zozoom out ng screen automatic
if (window.screen.width !== 1920 || window.screen.height !== 1080) {
    var currentZoom = document.documentElement.clientWidth / window.innerWidth * 100;

    if (currentZoom !== 85) {
        document.body.style.zoom = "90%";
    }
}

// History button
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-carousel-button]');
    const slidesContainer = document.querySelector('[data-slides]');
    const slides = slidesContainer.querySelectorAll('.history-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
            const activeSlide = slidesContainer.querySelector('[data-active]');
            let newIndex = [...slides].indexOf(activeSlide) + offset;

            if (newIndex < 0) newIndex = slides.length - 1;
            if (newIndex >= slides.length) newIndex = 0;

            slides[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const funfactImages = document.querySelectorAll('.funfact-image');

    funfactImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const funfactNumber = image.getAttribute('data-funfact');
            const funfact = document.querySelector(`.funfact[data-funfact="${funfactNumber}"]`);
            funfact.style.opacity = '1';
        });

        image.addEventListener('mouseleave', () => {
            const funfactNumber = image.getAttribute('data-funfact');
            const funfact = document.querySelector(`.funfact[data-funfact="${funfactNumber}"]`);
            funfact.style.opacity = '0';
        });
    });
});