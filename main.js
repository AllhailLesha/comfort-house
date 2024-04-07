const sliderImage = document.querySelectorAll(".slider__image");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const sliderPagination = document.querySelectorAll('.slider__pagination-item');

let active = 1;

sliderImage.forEach((image) => {
  console.log(image);
});

function loadShow() {
  let stt = 0;

  sliderImage[active].style.transform = `none`;
  sliderImage[active].style.opacity = 1;
  sliderImage[active].style.zIndex = 1;
  let imageWidth = sliderImage[active].offsetWidth;
  console.log(imageWidth);
  let sliderGap = imageWidth * 0.22;

  for (let i = active + 1; i < sliderImage.length; i++) {
    stt++;
    sliderImage[i].style.transform = `translateX(${sliderGap * stt}px) scale(${1 - 0.2*stt})`;
    sliderImage[i].style.opacity = stt > 2 ? 0 : 0.6;
    sliderImage[i].style.zIndex = -stt;
  }

  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    sliderImage[i].style.transform = `translateX(${-sliderGap * stt}px) scale(${1 - 0.2*stt})`;
    sliderImage[i].style.opacity = stt > 2 ? 0 : 0.6;
    sliderImage[i].style.zIndex = -stt;
  }
}

loadShow();

nextButton.onclick = () => {
  active = active + 1 < sliderImage.length ? active + 1 : 0;

  sliderPagination.forEach((button) => {
    button.classList.remove('slider__pagination-item--active');
    sliderPagination[active].classList.add('slider__pagination-item--active');
  })
  loadShow();
}

prevButton.onclick = () => {
  active = active - 1 >= 0 ? active - 1 : sliderImage.length - 1;

  sliderPagination.forEach((button) => {
    button.classList.remove('slider__pagination-item--active');
    sliderPagination[active].classList.add('slider__pagination-item--active');
  })
  loadShow();
}

for (let i = 0; i < sliderPagination.length; i++) {
  let button = sliderPagination[i];

  button.onclick = () => {
    sliderPagination.forEach((button) => {
      button.classList.remove('slider__pagination-item--active');
    })
    button.classList.add('slider__pagination-item--active');
    active = i;
    loadShow();
  };
}
