let menuOpen = document.querySelector(".menu-toggle");
let icon = menuOpen.querySelector("i");

let menuWrapper = document.querySelector(".menu-wrapper");

menuOpen.addEventListener("click", function () {
    icon.classList.toggle("fa-xmark");
    menuWrapper.classList.toggle("active");
})