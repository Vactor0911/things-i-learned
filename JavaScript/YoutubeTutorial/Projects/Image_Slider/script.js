const slides = document.querySelectorAll('.slides img');
const aryUrl = [
    "https://www.formula1.com/en/teams/red-bull-racing",
    "https://www.formula1.com/en/teams/mclaren",
    "https://www.formula1.com/en/teams/ferrari",
    "https://www.formula1.com/en/teams/mercedes",
    "https://www.formula1.com/en/teams/aston-martin",
    "https://www.formula1.com/en/teams/rb",
    "https://www.formula1.com/en/teams/haas",
    "https://www.formula1.com/en/teams/alpine",
    "https://www.formula1.com/en/teams/williams"
];
let slideIndex = 0;
let intervalId = null;

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        window.open(aryUrl[index], "_blank").focus();
    });
});

let initSlider = () => {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

document.addEventListener("DOMContentLoaded", initSlider);

let showSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}

let prevSlide = () => {
    resetInterval();
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex += slides.length;
    }
    showSlide();
}

let nextSlide = () => {
    resetInterval();
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex -= slides.length;
    }
    showSlide();
}

let resetInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}