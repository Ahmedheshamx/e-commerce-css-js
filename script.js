let menuBtn =document.querySelector('.container-menu')
let sidemenu = document.querySelector('.side-menu')
let body = document.querySelector('body')



menuBtn.addEventListener('click', () => {
    sidemenu.style.display = sidemenu.style.display === "block" ? "none" : "block";
    // left.style.filter = sidemenu.style.display === "block" ? "brightness(.5)" : "unset";
});













let pageMenu =document.querySelector('.page-menu')
let pageBtn =document.querySelector('#btn-page')

pageBtn.addEventListener('click', () => {
    pageMenu.style.display = pageMenu.style.display === "block" ? "none" : "block";
});













const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const nextBtn = document.querySelector('.swiper-button-next');
const prevBtn = document.querySelector('.swiper-button-prev');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSwiper() {
  const translateValue = -currentIndex * 100;
  swiperWrapper.style.transform = `translateX(${translateValue}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSwiper();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSwiper();
});



