const slides = Array.from(document.getElementsByClassName("slider__item"));

const arrowsArr = document.querySelectorAll(".slider__arrow");

for (let i = 0; i < arrowsArr.length; i++) {
  arrowForward = arrowsArr[1];
  arrowBack = arrowsArr[0];
}

let j = 0;

arrowForward.onclick = () => {
  j++;
  if (j == slides.length) {
    j = 0;
  }
  changeSlide(j);
};

arrowBack.onclick = () => {
  j--;
  if (j == -1) {
    j = slides.length - 1;
  }
  changeSlide(j);
};

function changeSlide(index) {
  const indexOfActiveSlide = slides.findIndex((slide) =>
    slide.classList.contains("slider__item_active")
  );
  slides[indexOfActiveSlide].classList.remove("slider__item_active");
  slides[index].classList.add("slider__item_active");
}
