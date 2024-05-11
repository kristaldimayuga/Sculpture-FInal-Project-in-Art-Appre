// Naglalagay ng shadow sa header pag wala sa "home" section
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".header");
    var homeSection = document.getElementById("home");

    // Function na nag lalgay ng "shadow" class sa header pag wala sa "home" section
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