const board = document.querySelector('#board')
const squares_number = 1050

for (let i = 0; i < squares_number; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('mouseleave', () => removeColor(square))
   board.append(square)
}
function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #000`
}
const colors = ['#217074', '#37745B', '#8B9D77', '#8B9D77', '#EDC5AB']

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]
}