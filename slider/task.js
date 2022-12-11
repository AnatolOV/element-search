const slides = Array.from(document.getElementsByClassName("slider__item"));

const arrowsArr = document.querySelectorAll(".slider__arrow");



  arrowForward = arrowsArr[1];
  arrowBack = arrowsArr[0];


arrowForward.onclick = () => {
  let iAct = slides.findIndex((slide) => slide.classList.contains("slider__item_active"));
  iAct++;
  if (iAct == slides.length) {
    iAct = 0;
  }
  changeSlide(iAct);
};

arrowBack.onclick = () => {
  let iAct = slides.findIndex((slide) => slide.classList.contains("slider__item_active"));
  iAct--;
  if (iAct == -1) {
    iAct = slides.length - 1;
  }
  changeSlide(iAct);
};

function changeSlide(index) {
  const indexOfActiveSlide = slides.findIndex((slide) => slide.classList.contains("slider__item_active"));
  slides[indexOfActiveSlide].classList.remove("slider__item_active");
  slides[index].classList.add("slider__item_active");
}
