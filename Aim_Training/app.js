const startButton = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeListButton = document.querySelector('#time-list')
const timeLeft = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#217074', '#37745B', '#8B9D77', '#8B9D77', '#EDC5AB']
let time = 0;
let score = 0

startButton.addEventListener('click', (event) => {
   event.preventDefault()
   screens[0].classList.add('up')
})

timeListButton.addEventListener('click', event => {
   if (event.target.classList.contains('time-btn')) {
      time = parseInt(event.target.getAttribute('data-time'))
      screens[1].classList.add('up')
      startGame()
   }
})

board.addEventListener('click', event => {
   if (event.target.classList.contains('circle')) {
      score++
      event.target.remove()
      createRandomCircle()
   }
   else return;

})


function startGame() {
   setInterval(decreaseTime, 1000)
   createRandomCircle()
   setTime(time)
}

function decreaseTime() {
   if (time === 0) {
      finishGame()
   }
   else {
      let current = --time
      if (current < 10) {
         current = `0${current}`
      }
      setTime(current)
   }

}

function setTime(value) {
   timeLeft.innerHTML = `00:${value}`
}

function finishGame() {
   board.innerHTML = `<h1>Your score: <span class ="primary">${score}</span></h1>`
   timeLeft.parentNode.classList.add('hide')
}

function createRandomCircle() {
   const circle = document.createElement('div')
   const size = getRandomNumber(10, 60)
   const { width, height } = board.getBoundingClientRect()
   const x = getRandomNumber(0, width - size)
   const y = getRandomNumber(0, height - size)

   circle.classList.add('circle')
   circle.style.width = `${size}px`
   circle.style.height = `${size}px`
   circle.style.top = `${y}px`
   circle.style.left = `${x}px`
   circle.style.background = getRandomColor();


   board.append(circle)
}

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]
}
