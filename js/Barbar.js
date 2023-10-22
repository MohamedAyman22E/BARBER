// menu
let navList = document.querySelector(".navList");
let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// header
let header_bottom = document.querySelector(".header_bottom");
window.addEventListener("scroll", () => {
  header_bottom.classList.toggle("active", scrollY > 120);
});
