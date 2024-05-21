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

    if (currentZoom !== 90) {
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


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
})

ScrollReveal().reveal('.history-header h1', {origin: 'left'})
ScrollReveal().reveal('.history-header p', {origin: 'right'})
ScrollReveal().reveal('.history-carousel')
ScrollReveal().reveal('.carousel-button.prev', {delay: 100, origin: 'left'})
ScrollReveal().reveal('.carousel-button.next', {delay: 100, origin: 'right'})

ScrollReveal().reveal('.famous-header', {origin: 'right'})
ScrollReveal().reveal('.first-famous-img, .second-famous-img, .third-famous-img', {delay: 500, origin: 'top', interval: 300})
ScrollReveal().reveal('.first-famous-text, .second-famous-text, .third-famous-text', {delay: 500, origin: 'bottom', interval: 300})
ScrollReveal().reveal('.famous-footer', {delay: 500, origin: 'left'})

ScrollReveal().reveal('.materials-header h1', {origin: 'left'})
ScrollReveal().reveal('.materials-header p', {origin: 'right'})
ScrollReveal().reveal('.materials-content', {delay: 500, origin: 'bottom'})

ScrollReveal().reveal('.sculptures-header h1', {origin: 'right'})
ScrollReveal().reveal('.sculpture', {origin: 'bottom', interval: 300})

ScrollReveal().reveal('.funfacts-header h3', {origin: 'right'})
ScrollReveal().reveal('.funfacts-header p', {origin: 'left'})
ScrollReveal().reveal('.funfact-image', {origin: 'top', interval: 300})

ScrollReveal().reveal('.significance-header h1', {origin: 'top'})
ScrollReveal().reveal('.significance-header p', {origin: 'left'})
ScrollReveal().reveal('.significance-content p, h3', {delay: 500, origin: 'right', interval: 500})