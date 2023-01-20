const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length - 1

let activeSlideIndex = 0;

sidebar.style.top = `-${slidesCount * 100}vh`

upButton.addEventListener('click', () => {
   changeSlide('up')
})

downButton.addEventListener('click', () => {
   changeSlide('down')
})

function changeSlide(direction) {
   if (direction === 'up') {
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
         activeSlideIndex = 0
      }
   }
   else if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0) {
         activeSlideIndex = slidesCount - 1
      }
   }


   const height = container.clientHeight

   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
