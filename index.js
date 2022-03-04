const board = document.querySelector('#board');
const colors = ['#DE3218', '#F19314', '#F1E014', '#1BC51F', '#0B8DCF', '#0732BF', '#7B0AA4'];
const squaresNumbers = 500;

for (let i = 0; i < squaresNumbers; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#AAA5A5';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}