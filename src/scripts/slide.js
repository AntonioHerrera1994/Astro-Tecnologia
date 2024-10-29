document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

prevButton2.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton2.addEventListener('click', () => showSlide(currentSlide + 1));

showSlide(currentSlide); // Mostrar el primer slide al cargar la página


const button = document.querySelector('button');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');

button.addEventListener('click', () => {
  div1.classList.add('fade-out');
  div2.classList.add('fade-in');
});
});
    
