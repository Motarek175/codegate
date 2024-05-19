// header
let togglemenu = document.querySelector(".header .container .links .toggle");
let linksmenu = document.querySelector(".header .container .links .link ul");

togglemenu.addEventListener("click", () => {
  linksmenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 1;
  const slides = document.querySelectorAll(".projects .card");
  const totalSlides = slides.length;

  let right = document.querySelector(".right");
  let left = document.querySelector(".left");
  right.addEventListener("click", () => plusSlides(1));
  left.addEventListener("click", () => plusSlides(-1));

  slides[currentSlide - 1].classList.add("active");
  function plusSlides(n) {
    slides[currentSlide - 1].classList.remove("active");
    currentSlide = ((currentSlide + n + totalSlides - 1) % totalSlides) + 1;
    slides[currentSlide - 1].classList.add("active");
  }
});
