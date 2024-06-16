const headerEL = document.querySelector(".header");
const btnEl = document.querySelector(".btn-mobile-nav");

btnEl.addEventListener("click", () => {
    headerEL.classList.toggle("nav-open");
})