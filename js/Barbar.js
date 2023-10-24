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

// pricing
let allButtonBricing = document.querySelectorAll(".button button");
let allBricingBoxs = document.querySelectorAll(".allBricingBoxs .aboutBox");

allButtonBricing.forEach(e => {
  e.addEventListener("click", () => {
    allButtonBricing.forEach(ele => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
    let filter = e.getAttribute("data-filter");
    allBricingBoxs.forEach(index => {
      if (filter == index.getAttribute("data-category")) {
        index.classList.add("show");
        index.classList.remove("hide");
      } else {
        index.classList.remove("show");
        index.classList.add("hide");
      }
      if (filter === "all") {
        index.classList.add("show");
      }
    });
  });
});
