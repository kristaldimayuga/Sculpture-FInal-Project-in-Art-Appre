// Naglalagay ng shadow sa header pag wala sa "home" section
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".header");
    var homeSection = document.getElementById("home");

    // Function na nag lalagay ng "shadow" class sa header pag wala sa "home" section
    function toggleHeaderShadow() {
        if (window.scrollY >= homeSection.offsetHeight + homeSection.offsetTop ) {
            header.classList.add("shadow");
        } else {
            header.classList.remove("shadow");
        }
    }

    toggleHeaderShadow();

    window.addEventListener("scroll", toggleHeaderShadow);
});

// Nag zozoom out ng screen automatic
if (window.screen.width !== 1920 || window.screen.height !== 1080) {
    var currentZoom = document.documentElement.clientWidth / window.innerWidth * 100;

    if (currentZoom !== 90) {
        document.body.style.zoom = "90%";
    }
}